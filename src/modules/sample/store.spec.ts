import { sampleStore } from '@/modules/sample/store'
import { sampleApi } from '@/modules/sample/apis'

beforeAll(async () => {
  const _mock = { status: 200 }
  sampleApi.getSampleResponse = jest.fn().mockResolvedValue(_mock)
  await sampleStore.actions.fetchSampleResponse()
})

describe('fetchSampleResponse', () => {
  test('取得した値がストアに格納されること', async () => {
    expect(sampleStore.getters.getStatusCode()).toBe(200)
  })
})
