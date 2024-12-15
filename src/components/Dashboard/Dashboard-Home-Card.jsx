import React from 'react'
import { BiDollarCircle, BiShoppingBag, BiUserCircle, BiWallet } from 'react-icons/bi';
import DashboardHomeGridCard from './Dashboar-Home-Grid-Card';
const DashboardHomeCards = () => {
const cards = [
  {
    id:1,
    title: 'Total active users ',
    icon: <BiDollarCircle size={20} />,
    value: '18,765',
    description: '+2.6% last 7 days',
    color:"#00a76f",
    data1:["1","2","3","4","5"]
    // percentage: "+16.24%" ,

  },
  {
    id:2,
    title: 'Total installed',
    icon: <BiShoppingBag size={20} />,
    value: '4876',
    description: '+2.6% last 7 days',
    color:"#00a76f",
    data1:["1","2","3","4","5"]
    // percentage: "+16.24%",

  },
  {
    id:3,
    title: 'Total downloads',
    icon: <BiUserCircle size={20} />,
    value: '678',
    description: '+2.6% last 7 days',
    color:"#00a76f",
    data1:["1","2","3","4","5"]
    // percentage: "+16.24%",

  },
]

  
  return (
    <div className="flex gap-5 w-full justify-center flex-wrap mt-10 px-3">
      {
        cards.map(card => (
          <DashboardHomeGridCard key={card.id} {...card} />
        ))
      }
      

    </div>
  )
}

export default DashboardHomeCards;
