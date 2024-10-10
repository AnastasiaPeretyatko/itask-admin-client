import { createSlice } from '@reduxjs/toolkit'

type StudentsState = {
  array: []
  isLoading: boolean
  count: number
  message: string | null
}

const initialState: StudentsState = {
  array: [],
  count: 0,
  isLoading: true,
  message: null,
}

export const students = createSlice({
  name: 'students',
  initialState,
  reducers: {},
})

export const { actions, reducer } = students
