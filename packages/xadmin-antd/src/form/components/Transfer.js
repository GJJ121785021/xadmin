import React from 'react'
import app, { use } from 'xadmin'
import { Loading } from 'xadmin-ui'
import { Transfer } from 'antd'
import _ from 'lodash'

const RelateMultiTransfer = props => {
  const { loading, options, input: { value, onChange }, field } = use('model.relate.select', props)
  const data = React.useMemo(() => options.map(opt => ({ key: opt.value, title: opt.label, ...opt })), [ options ])

  const onSelectChange = (targetKeys) => {
    onChange(options.filter(opt=>targetKeys.indexOf(opt.value)>=0).map(opt => opt.item))
  }

  return loading ? <Loading /> : (
    <Transfer
      key="transfer"
      dataSource={data}
      showSearch
      listStyle={{
        width: 200,
        height: 300
      }}
      titles={[ '选择', '取消' ]}
      targetKeys={value ? value.map(item=>item.id) : []}
      onChange={onSelectChange}
      render={item => item.label}
      {...field.attrs}
    />
  )

}

export default RelateMultiTransfer
