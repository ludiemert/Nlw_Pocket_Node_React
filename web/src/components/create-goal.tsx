import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './ui/radio-group'
import { X } from 'lucide-react'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const createGoalForm = z.object({
  title: z.string().min(1, 'Enter the activity you want to do 😎😎😎 '),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

type CreateGoalForm = z.infer<typeof createGoalForm>

export function CreateGoal() {
  const { register, control, handleSubmit, formState } =
    useForm<CreateGoalForm>({
      resolver: zodResolver(createGoalForm),
    })

  function handleCreateGoal(data: CreateGoalForm) {
    console.log(data)
  }

  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Register goal</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>

          <DialogDescription>
            Add activities that are good for you and that you want to continue
            practicing every week.
          </DialogDescription>
        </div>

        <form
          onSubmit={handleSubmit(handleCreateGoal)}
          className="flex-1 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">What is the activity?</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Exercise, meditate, Swimming, etc...."
                {...register('title')}
              />

              {formState.errors.title && (
                <p className="text-red-400 text-sm">
                  {formState.errors.title.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">How many times a week?</Label>
              <Controller
                control={control}
                name="desiredWeeklyFrequency"
                defaultValue={3}
                render={({ field }) => {
                  return (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={String(field.value)}
                    >
                      <RadioGroupItem value="1">
                        <RadioGroupIndicator />
                        <span className=" text-zinc-300 text-sm font-medium leading-none">
                          1x a week
                        </span>
                        <span className="text-lg leading-none">🥱</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="2">
                        <RadioGroupIndicator />
                        <span className=" text-zinc-300 text-sm font-medium leading-none">
                          2x a week
                        </span>
                        <span className="text-lg leading-none">🙂</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="3">
                        <RadioGroupIndicator />
                        <span className=" text-zinc-300 text-sm font-medium leading-none">
                          3x a week
                        </span>
                        <span className="text-lg leading-none">😎</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="4">
                        <RadioGroupIndicator />
                        <span className=" text-zinc-300 text-sm font-medium leading-none">
                          4x a week
                        </span>
                        <span className="text-lg leading-none">🤗</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="5">
                        <RadioGroupIndicator />
                        <span className=" text-zinc-300 text-sm font-medium leading-none">
                          5x a week
                        </span>
                        <span className="text-lg leading-none">🤩</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="6">
                        <RadioGroupIndicator />
                        <span className=" text-zinc-300 text-sm font-medium leading-none">
                          6x a week
                        </span>
                        <span className="text-lg leading-none">😜</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="7">
                        <RadioGroupIndicator />
                        <span className=" text-zinc-300 text-sm font-medium leading-none">
                          Every day week
                        </span>
                        <span className="text-lg leading-none">🥳🥳</span>
                      </RadioGroupItem>
                    </RadioGroup>
                  )
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button type="button" className="flex-1" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button className="flex-1">Save</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}
