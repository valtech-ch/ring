import React, { ReactElement } from 'react'
import { Document } from '@contentful/rich-text-types'

import { RichText } from '@ring/kasaobake/ui'

export default function ContentTemplate({
  fields,
}: ContentTemplateProps): ReactElement {
  return (
    <div>
      <RichText richText={fields.text} />
    </div>
  )
}

type ContentTemplateProps = {
  fields: ContentPage
}

type ContentPage = {
  text?: Document
}
