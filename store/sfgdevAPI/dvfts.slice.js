import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_dvft_list = createAsyncThunk(
  "dvfts/api_v1_dvft_list",
  async payload => {
    const response = await apiService.api_v1_dvft_list(payload)
    return response.data
  }
)
export const api_v1_dvft_create = createAsyncThunk(
  "dvfts/api_v1_dvft_create",
  async payload => {
    const response = await apiService.api_v1_dvft_create(payload)
    return response.data
  }
)
export const api_v1_dvft_retrieve = createAsyncThunk(
  "dvfts/api_v1_dvft_retrieve",
  async payload => {
    const response = await apiService.api_v1_dvft_retrieve(payload)
    return response.data
  }
)
export const api_v1_dvft_update = createAsyncThunk(
  "dvfts/api_v1_dvft_update",
  async payload => {
    const response = await apiService.api_v1_dvft_update(payload)
    return response.data
  }
)
export const api_v1_dvft_partial_update = createAsyncThunk(
  "dvfts/api_v1_dvft_partial_update",
  async payload => {
    const response = await apiService.api_v1_dvft_partial_update(payload)
    return response.data
  }
)
export const api_v1_dvft_destroy = createAsyncThunk(
  "dvfts/api_v1_dvft_destroy",
  async payload => {
    const response = await apiService.api_v1_dvft_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dvftsSlice = createSlice({
  name: "dvfts",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_dvft_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dvft_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_dvft_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dvft_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dvft_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_dvft_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dvft_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dvft_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_dvft_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dvft_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dvft_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_dvft_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dvft_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dvft_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_dvft_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dvft_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dvft_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_dvft_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_dvft_list,
  api_v1_dvft_create,
  api_v1_dvft_retrieve,
  api_v1_dvft_update,
  api_v1_dvft_partial_update,
  api_v1_dvft_destroy,
  slice: dvftsSlice
}
