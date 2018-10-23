import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import CollectionComponent from 'src/components/leftSideMenu/CollectionComponent';
import { ICollections } from 'src/interfaces/ICollection.interfaces';
import { addCollection } from '../actions/index';

const mapStateToProps = (state: ICollections) => ({
  collections: state.collections
});

const mapDispatchToProps = (dispatch: Dispatch) => {
 return bindActionCreators({
    addCollection
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionComponent);