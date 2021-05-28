import Vue from 'vue'
import { sampleApi } from '@/modules/sample/apis'

type State = {
  statusCode: number | null
}

export class SampleStore {
  private defaultState = (): State => {
    return {
      statusCode: null,
    }
  }

  private state: State = this.defaultState()

  /*
   * Getters
   */
  getters = {
    getStatusCode: (): number | null => {
      return this.state.statusCode
    },
  }

  /*
   * Actions
   */
  actions = {
    fetchSampleResponse: async (): Promise<void> => {
      const res = await sampleApi.getSampleResponse()
      this.mutations.updateStatusCode(res.status)
    },
  }

  /*
   * Mutations
   */
  mutations = {
    updateStatusCode: (statusCode: number): void => {
      Vue.set(this.state, 'statusCode', statusCode)
    },
  }
}

export const sampleStore = Vue.observable(new SampleStore())
