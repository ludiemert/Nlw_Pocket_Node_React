import { Plus } from 'lucide-react'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">August 5th to 12th</span>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Register Goal 🥳
          </Button>
        </DialogTrigger>
      </div>
    </div>
  )
}
