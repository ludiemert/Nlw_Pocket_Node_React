import logo from './assets/logo-in-orbit.svg'
import letsStart from './assets/lets-start-illustration.svg'

import { Plus, X } from 'lucide-react'
import { Button } from './components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './components/ui/dialog'

export function App() {
  return (
    <Dialog>
      <div className="h-screen flex flex-col items-center justify-center gap-8">
        <img src={logo} alt="in.orbit" />
        <img src={letsStart} alt="in.orbit" />
        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          You haven't registered any goals yet, how about registering one right
          now?
        </p>

        <DialogTrigger asChild>
          <Button>
            <Plus className="size-4" />
            Register Goal 🥳
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent>
        <div className="flex flex-col gap-3">
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

          <form action="" className="flex-1 flex flex-col justify-between">
            <div></div>

            <div className="flex items-center gap-3">
              <Button>Close</Button>
              <Button>Save</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
