import { connect } from 'react-redux';
import MenuComponent from 'src/components/leftSideMenu/MenuComponent';
import { ICollections } from 'src/interfaces/ICollection.interfaces';

const mapStateToProps = (state: ICollections) => ({
  collections: state.collections
})

export default connect(mapStateToProps, null)(MenuComponent);