import { Plus } from 'lucide-react'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { InOrbitIcon } from './in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'

export function Summary() {
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
    </div>
  )
}
