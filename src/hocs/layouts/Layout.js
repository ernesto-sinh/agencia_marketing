import { connect } from 'react-redux'


function Layout({children}){
    return(
        <div>
            {children}
        </div>
    )
}

const MapStateToProp = state => ({

})

export default connect(MapStateToProp,{

}) (Layout)