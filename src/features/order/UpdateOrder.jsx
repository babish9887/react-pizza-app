import React, { useState } from 'react'
import Button from '../../ui/Button'
import { useFetcher } from 'react-router-dom'
import { updateOrder } from '../../services/apiRestaurant'

function UpdateOrder({order}) {
  const [text, setText]=useState("Make Priority")
    const fetcher=useFetcher()
    
  return (
    <fetcher.Form method='PATCH' className='text-right'>
    <Button type='primary' onClick={()=>setText("Making Priority...")}>{text}</Button>
    </fetcher.Form>
    )
}

export default UpdateOrder;

export async function action({request, params}){
    const data={priority: true};
    await updateOrder(params.orderId, data);
    return null;
}