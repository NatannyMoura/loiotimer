import { Cycle } from './reducer'

export enum ActionType {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
}

export const addNewCycleAction = (newCycle: Cycle) => {
  return {
    type: ActionType.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export const interruptCurrentCycleAction = () => {
  return {
    type: ActionType.INTERRUPT_CURRENT_CYCLE,
  }
}

export const markCurrentCycleAsFinishedAction = () => {
  return {
    type: ActionType.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
