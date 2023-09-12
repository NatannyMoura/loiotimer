/* eslint-disable @typescript-eslint/no-unused-vars */
import { HandPalm, Play } from 'phosphor-react'
import * as zod from 'zod'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './Home.styles'
import { NewCycleForm } from './components/NewCycleForm/NewCycleForm'
import { Countdown } from './components/Countdown/Countdown'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

export const Home = () => {
  const newValidateFormSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
      .number()
      .min(1, 'A tarefa precisa de pelo menos 5 minutos'),
  })

  type newCycleFormData = zod.infer<typeof newValidateFormSchema>

  const newCycleForm = useForm<newCycleFormData>({
    resolver: zodResolver(newValidateFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const handleCreateNewCycle = (data: newCycleFormData) => {
    createNewCycle(data)
    reset()
  }

  const isSubmitDisabled = watch('task')

  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext)

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="submit">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={!isSubmitDisabled}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
