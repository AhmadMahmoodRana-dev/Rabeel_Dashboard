import React from 'react'
import { BiDollarCircle, BiShoppingBag, BiUserCircle, BiWallet } from 'react-icons/bi';
import DashboardHomeGridCard from './Dashboar-Home-Grid-Card';
const DashboardHomeCards = () => {
const cards = [
  {
    id:1,
    title1: 'Cash Sale ',
    title2: 'Last M Sale ',
    title3: 'Today Sale ',
    title4: 'Last D Sale ',
    data1: '20,000 ',
    data2: '20,000 ',
    data3: '2000 ',
    data4: '2000 ',
    percent1: '+2.6% ',
    percent2: '+2.6% ',

  },
  {
    id:2,
    title1: 'B2 Sale ',
    title2: 'Last M Sale ',
    title3: 'Today Sale ',
    title4: 'Last D Sale ',
    data1: '20,000 ',
    data2: '20,000 ',
    data3: '2000 ',
    data4: '2000 ',
    percent1: '+2.6% ',
    percent2: '+2.6%'
  },
  {
    id:3,
   title1: 'Install Sale ',
    title2: 'Last M Sale ',
    title3: 'Today Sale ',
    title4: 'Last D Sale ',
    data1: '20,000 ',
    data2: '20,000 ',
    data3: '2000 ',
    data4: '2000 ',
    percent1: '+2.6% ',
    percent2: '+2.6%'
  },
  {
    id:4,
   title1: 'Install Sale ',
    title2: 'Last M Sale ',
    title3: 'Today Sale ',
    title4: 'Last D Sale ',
    data1: '20,000 ',
    data2: '20,000 ',
    data3: '2000 ',
    data4: '2000 ',
    percent1: '+2.6% ',
    percent2: '+2.6%'
  },
  {
    id:5,
   title1: 'Install Sale ',
    title2: 'Last M Sale ',
    title3: 'Today Sale ',
    title4: 'Last D Sale ',
    data1: '20,000 ',
    data2: '20,000 ',
    data3: '2000 ',
    data4: '2000 ',
    percent1: '+2.6% ',
    percent2: '+2.6%'
  },
  {
    id:6,
   title1: 'Install Sale ',
    title2: 'Last M Sale ',
    title3: 'Today Sale ',
    title4: 'Last D Sale ',
    data1: '20,000 ',
    data2: '20,000 ',
    data3: '2000 ',
    data4: '2000 ',
    percent1: '+2.6% ',
    percent2: '+2.6%'
  },
  {
    id:7,
    title1: 'Cash Sale ',
    title2: 'Last M Sale ',
    title3: 'Today Sale ',
    title4: 'Last D Sale ',
    data1: '20,000 ',
    data2: '20,000 ',
    data3: '2000 ',
    data4: '2000 ',
    percent1: '+2.6% ',
    percent2: '+2.6% ',

  },
  {
    id:8,
    title1: 'B2 Sale ',
    title2: 'Last M Sale ',
    title3: 'Today Sale ',
    title4: 'Last D Sale ',
    data1: '20,000 ',
    data2: '20,000 ',
    data3: '2000 ',
    data4: '2000 ',
    percent1: '+2.6% ',
    percent2: '+2.6%'
  },
  {
    id:9,
   title1: 'Install Sale ',
    title2: 'Last M Sale ',
    title3: 'Today Sale ',
    title4: 'Last D Sale ',
    data1: '20,000 ',
    data2: '20,000 ',
    data3: '2000 ',
    data4: '2000 ',
    percent1: '+2.6% ',
    percent2: '+2.6%'
  },
  {
    id:10,
   title1: 'Install Sale ',
    title2: 'Last M Sale ',
    title3: 'Today Sale ',
    title4: 'Last D Sale ',
    data1: '20,000 ',
    data2: '20,000 ',
    data3: '2000 ',
    data4: '2000 ',
    percent1: '+2.6% ',
    percent2: '+2.6%'
  },
  {
    id:11,
   title1: 'Install Sale ',
    title2: 'Last M Sale ',
    title3: 'Today Sale ',
    title4: 'Last D Sale ',
    data1: '20,000 ',
    data2: '20,000 ',
    data3: '2000 ',
    data4: '2000 ',
    percent1: '+2.6% ',
    percent2: '+2.6%'
  },
  {
    id:12,
   title1: 'Install Sale ',
    title2: 'Last M Sale ',
    title3: 'Today Sale ',
    title4: 'Last D Sale ',
    data1: '20,000 ',
    data2: '20,000 ',
    data3: '2000 ',
    data4: '2000 ',
    percent1: '+2.6% ',
    percent2: '+2.6%'
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
