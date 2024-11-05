import { nanoid } from 'nanoid'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Separator } from '@/components/ui/Separator'
import ThemeMenuButton from '@/components/ThemeMenuButton'
import CreateRoomForm from '@/components/CreateRoomForm'
import JoinRoomButtoon from '@/components/JoinRoomButton'

export const dynamic = 'force-dynamic'

export default function Home() {
  const roomId = nanoid()

  return (
    <div className='flex h-screen flex-col items-center justify-between pb-5 pt-[13vh]'>
      <ThemeMenuButton className='fixed right-[5vw] top-5 flex-1 md:right-5' />

      <Card className='w-[90vw] max-w-[400px]'>
        <CardHeader>
          <CardTitle>Scribble</CardTitle>
          <CardDescription>
            Draw on the same canvas with your friends in real-time.
          </CardDescription>
        </CardHeader>

        <CardContent className='flex flex-col space-y-4'>
          <CreateRoomForm roomId={roomId} />

          <div className='flex items-center space-x-2 '>
            <Separator />
            <span className='text-xs text-muted-foreground'>OR</span>
            <Separator />
          </div>

          <JoinRoomButtoon />
        </CardContent>
      </Card>

      <div className="hidden md:flex justify-center mt-8 mb-8">
    <video autoPlay loop style={{ width: '980px', height: '470px' }} className="shadow-lg shadow-black rounded-lg dark:shadow-white">
        <source src="/scribbledemo.mp4" />
      </video>
    </div>

      <div>
        <p className='text-sm text-muted-foreground'>
          Crafted by{' '}
          <a
            href='https://vineetjassal.vercel.app/'
            target='__blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            @vineetjassal
          </a>
          . The source code is on{' '}
          <a
            href='https://github.com/vineetjassal/scribble'
            target='__blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  )
}
