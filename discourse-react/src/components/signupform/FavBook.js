function FavBook({handleChange}) {
   return (
      <div>
         <label for="fav_book_genre">Favorite Book Genre:</label>
                <select onChange={handleChange} name="fav_book_genre" id="fav_book_genre">
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="non-fiction">Non-fiction</option>
                    <option value="thriller">Thriller</option>
                    <option value="romance">Romance</option>
                </select>
      </div>
   )
};

export default FavBook;