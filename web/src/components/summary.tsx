import { CheckCircle2, Plus } from 'lucide-react'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { InOrbitIcon } from './in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from '../http - requisitions/get-summary'

export function Summary() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 1000 = 1 segund / 60 seconds = atualizacao
  })

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className=" flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">August 5th to 12th</span>
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Register Goal 🥳
          </Button>
        </DialogTrigger>
      </div>

      <div className=" flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: '50%' }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            You completed <span className="text-zinc-100">8</span> out of{' '}
            <span className="text-zinc-100">15</span> goals this week.
          </span>
          <span>58%</span>
        </div>
      </div>

      <Separator />

      <div className="flex flex-wrap gap-3">
        <OutlineButton>
          <Plus className=" size-4 text-zinc-600" />
          Meditate
        </OutlineButton>

        <OutlineButton>
          <Plus className=" size-4 text-zinc-600" />
          Exercise
        </OutlineButton>

        <OutlineButton>
          <Plus className=" size-4 text-zinc-600" />
          Wake up early
        </OutlineButton>

        <OutlineButton>
          <Plus className=" size-4 text-zinc-600" />
          eating well
        </OutlineButton>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Your week</h2>

        <div className="flex flex-col gap-4">
          <h3 className=" font-medium">
            Sunday
            <span className="text-zinc-400 text-xs">(August 10th)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className=" size-4 text-pink-500 " />
              <span className="text-sm text-zinc-400">
                {' '}
                "You completed 🤗😎😎🤩"
                <span className="text-zinc-100">Wake up early</span> " the{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 className=" size-4 text-pink-500 " />
              <span className="text-sm text-zinc-400">
                {' '}
                "You completed 🤗😎😎🤩"
                <span className="text-zinc-100">Wake up early</span> " the{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 className=" size-4 text-pink-500 " />
              <span className="text-sm text-zinc-400">
                {' '}
                "You completed 🤗😎😎🤩"
                <span className="text-zinc-100">Wake up early</span> " the{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className=" font-medium">
            Monday
            <span className="text-zinc-400 text-xs">(August 11th)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className=" size-4 text-pink-500 " />
              <span className="text-sm text-zinc-400">
                {' '}
                "You completed 🤗😎😎🤩"
                <span className="text-zinc-100">Wake up early</span> " the{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className=" font-medium">
            Tuesday
            <span className="text-zinc-400 text-xs">(August 12th)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className=" size-4 text-pink-500 " />
              <span className="text-sm text-zinc-400">
                {' '}
                "You completed 🤗😎😎🤩"
                <span className="text-zinc-100">Wake up early</span> " the{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 className=" size-4 text-pink-500 " />
              <span className="text-sm text-zinc-400">
                {' '}
                "You completed 🤗😎😎🤩"
                <span className="text-zinc-100">Wake up early</span> " the{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className=" font-medium">
            Wednesday
            <span className="text-zinc-400 text-xs">(August 13th)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className=" size-4 text-pink-500 " />
              <span className="text-sm text-zinc-400">
                {' '}
                "You completed 🤗😎😎🤩"
                <span className="text-zinc-100">Wake up early</span> " the{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 className=" size-4 text-pink-500 " />
              <span className="text-sm text-zinc-400">
                {' '}
                "You completed 🤗😎😎🤩"
                <span className="text-zinc-100">Wake up early</span> " the{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
