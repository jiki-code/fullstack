import React from 'react'
import { Card } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

const AddTask = () => {
  return (
  <Card className='p-4 border-0 bg-gradient-card shadow-custom-lg '>
    <div className='flex flex-col gap-3 sm:flex-row'>
      <Input type='text' placehoder='Bạn cần phải làm gì' className='h-12 text-base bg-amber-50 sm:flex-1 border-border/500 focus:border-primary/50 focus:ring-primary/20'></Input>
      <Button variant='gradient' size='xl' className={'px-6 cursor-pointer text-white'}> <Plus className='h-4 w-4' /> Add</Button>
    </div>
  </Card>
  )
}

export default AddTask