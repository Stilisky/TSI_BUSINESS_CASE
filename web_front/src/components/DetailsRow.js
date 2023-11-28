/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import moment from 'moment/moment'
const DetailsRow = ({game}) => {
   const date = moment(game.created_at).format("DD/MM/YYYY")
  return (
    <>
      <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
                  
         <td className="py-3 px-6 text-center">
            <span className="font-medium">{game.opposingTeam}</span>
         </td>

         <td className="py-3 px-6 text-center">
            <span className="font-medium">{game.pointsScored}</span>
         </td>

         <td className="py-3 px-6 text-center">
            <span className="font-medium">{game.numberAssists}</span>
         </td>

         <td className="py-3 px-6 text-center">
            <span className="font-medium">{game.numberIntercepts}</span>
         </td>

         <td className="py-3 px-6 text-center">
            <span className="font-medium">{game.numberShotsBlocked}</span>
         </td>

         <td className="py-3 px-6 text-center">
            <span className="font-medium">{game.shotSuccess} %</span>
         </td>

         <td className="py-3 px-6 text-center">
            <span className="font-medium">{date}</span>
         </td>
         
      </tr>
    </>
  )
}

export default DetailsRow