import type { TaskResponseDTO } from "@/types/TaskResponseDTO";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Input } from "../ui/input";
import { CreateTaskSchema } from "@/zod/CreateTaskSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import type { TaskCreateDTO } from "@/types/TaskCreateDTO";
import type { TaskUpdateDTO } from "@/types/TaskUpdateDTO";
import { useEffect, useState, type ReactNode } from "react";
import { DialogDescription } from "@radix-ui/react-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ChevronDownIcon } from "lucide-react";
import { UpdateTaskSchema } from "@/zod/UpdateTaskSchema";
import { Checkbox } from "../ui/checkbox";
import { Text } from "../common";

interface TaskDialogProps {
  children: ReactNode;
  initialTaskDto: TaskResponseDTO | null;
  onCreate?: (taskCreateDto: TaskCreateDTO) => Promise<TaskResponseDTO>;
  onUpdate?: (
    id: string,
    taskUpdateDto: TaskUpdateDTO
  ) => Promise<TaskResponseDTO>;
  isLoading: boolean;
}

export const TaskDialog = ({
  children,
  initialTaskDto,
  onCreate,
  onUpdate,
  isLoading,
}: TaskDialogProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);

  const formSchema = initialTaskDto ? UpdateTaskSchema : CreateTaskSchema;

  const defaultValuesForm = {
    title: initialTaskDto ? initialTaskDto.title : "",
    description: initialTaskDto ? initialTaskDto.description : "",
    dueDate: initialTaskDto
      ? initialTaskDto.dueDate
        ? new Date(initialTaskDto.dueDate)
        : undefined
      : undefined,
    isDone: initialTaskDto ? initialTaskDto.isDone : false,
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValuesForm,
  });

  const getDialogTitle = (): string => {
    return initialTaskDto ? "Atualizar Tarefa" : "Criar Tarefa";
  };

  const getDialogDescription = (): string => {
    return initialTaskDto
      ? "Atualize os detalhes da sua tarefa abaixo."
      : "Preencha os detalhes da nova tarefa abaixo.";
  };

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    if (initialTaskDto) {
      onUpdate?.(initialTaskDto.id, data).then(() => {
        setOpen(false);
        form.reset();
      });
    } else {
      onCreate?.({
        title: data.title!,
        description: data.description!,
        dueDate: data.dueDate,
      }).then(() => {
        setOpen(false);
        form.reset();
      });
    }
  };

  const onClose = () => {
    setOpen(false);
    form.reset();
  };

  useEffect(() => {
    if (open) {
      form.reset(defaultValuesForm);
    }
  }, [initialTaskDto, open, form]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-[var(--primary-color)]">
            {getDialogTitle()}
          </DialogTitle>
          <DialogDescription>{getDialogDescription()}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col gap-y-2"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Título</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex.: Comprar pão" {...field} />
                  </FormControl>
                  <FormDescription>Insira o título da tarefa</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="font-bold">Descrição</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex.: Ir na rua comprar pão"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Insira a descrição da tarefa
                    </FormDescription>
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">
                    Data de Vencimento
                  </FormLabel>
                  <FormControl>
                    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" id="date">
                          {field.value
                            ? field.value.toLocaleDateString()
                            : "Selecionar data"}
                          <ChevronDownIcon />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          disabled={(date) =>
                            date < new Date(new Date().setHours(0, 0, 0, 0))
                          }
                          selected={field.value}
                          onSelect={(date) => {
                            field.onChange(date);
                            setPopoverOpen(false);
                          }}
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormDescription>
                    Escolha uma data para a tarefa ser concluída (opcional)
                  </FormDescription>
                </FormItem>
              )}
            />
            {initialTaskDto && (
              <FormField
                control={form.control}
                name="isDone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Status</FormLabel>
                    <FormControl>
                      <div className="flex flex-row gap-x-2 items-center">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <Text>{field.value ? "Concluída" : "Pendente"}</Text>
                      </div>
                    </FormControl>
                    <FormDescription>
                      Atualize o status da tarefa
                    </FormDescription>
                  </FormItem>
                )}
              />
            )}
          </form>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant={"destructive"}
              className={`cursor-pointer ${
                isLoading && "opacity-50 cursor-not-allowed"
              }`}
              onClick={onClose}
              disabled={isLoading}
            >
              Cancelar
            </Button>
          </DialogClose>
          <Button
            className={`cursor-pointer bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] ${
              isLoading && "opacity-50 cursor-not-allowed"
            }`}
            disabled={isLoading}
            onClick={form.handleSubmit(handleSubmit)}
          >
            {initialTaskDto ? "Atualizar" : "Salvar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
