const SelectedMovie = (props) => {

    if (!props.show) {
        return null;
    }

    return ( 
        <div className="SelectedMovieModal">
            Modal test
            <button onClick={props.onClose}>Close Modal</button>
        </div>
     );
}
 
export default SelectedMovie;