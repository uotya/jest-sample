import axios, { AxiosPromise } from 'axios'

export const sampleApi = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getSampleResponse(): AxiosPromise<any> {
    return axios({
      method: 'GET',
      url: 'https://httpbin.org/status/200',
    })
  },
}
