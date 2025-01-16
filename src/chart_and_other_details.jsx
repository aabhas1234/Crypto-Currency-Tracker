import React from 'react'
import Coin_name_details from './coin_name_details.jsx'
import Livepricing from './livepricing.jsx'
import Trading_view_chart_widget from './trading_view_chart_widget';
const chart_and_other_details = ({Price_Data, Btc_Data}) => {
    return (
        <div className='bg-white p-9 rounded-md'>

            <Coin_name_details Btc_Data={Btc_Data} />

            <Livepricing Price_Data={Price_Data} Btc_Data={Btc_Data} />

            <div className='h-80'>
                <Trading_view_chart_widget Btc_Data={Btc_Data} />
            </div>

        </div>
    )
}

export default chart_and_other_details