'use client'
// import { laBelleAurore } from '@/app/layout'
// import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

import { getAllNailServices } from '@/services/nailService'

export type NailServiceProps = {
    id:number
    name: string
    description: string
    duration: number
    price: number
}

const NailServiceCard = () => {
    const [nailServiceList, setNailServiceList] = useState<NailServiceProps[]>([])
    useEffect(() => {
        getAllNailServices().then((res) => {
            setNailServiceList(res)
          })
          .catch((e) => {
            return e;
          });
      }, []);
console.log(nailServiceList);

  return (
    <>
        {nailServiceList && nailServiceList?.map((item) => {
            return (
                <div key={item.id}>
                    {/* <h2 className={classNames("text-[#FE6A6A] text-3xl", laBelleAurore.className)}>{item.name}</h2> */}
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <p>{item.duration}</p>
                </div>
            )
        })

        }
    </>
  )
}

export default NailServiceCard
