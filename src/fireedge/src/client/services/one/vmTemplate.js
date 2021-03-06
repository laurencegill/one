import { Actions, Commands } from 'server/utils/constants/commands/template'
import httpCodes from 'server/utils/constants/http-codes'
import { requestData, requestParams } from 'client/utils'

export const getTemplate = ({ filter, id }) => {
  const name = Actions.TEMPLATE_INFO
  const { url, options } = requestParams(
    { filter, id },
    { name, ...Commands[name] }
  )

  return requestData(url, options).then(res => {
    if (!res?.id || res?.id !== httpCodes.ok.id) throw res

    return res?.data?.VMTEMPLATE ?? {}
  })
}
