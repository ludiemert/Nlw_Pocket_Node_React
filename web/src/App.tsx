import logo from './assets/logo-in-orbit.svg'
import letsStart from './assets/lets-start-illustration.svg'


export function App() {
  return (
		<div className="h-screen flex flex-col items-center justify-center gap-8">

		<img src={logo} alt='in.orbit' />		
		<img src={letsStart} alt='in.orbit' />
		
		</div>
	)
}
