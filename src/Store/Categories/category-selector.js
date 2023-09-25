import {createSelector} from 'reselect';


const selectCategoryReducer = (state)=> state.categories;

// export const selectCategories = createSelector(
// [selectCategoryReducer],

// (categoriesSlice)=> categoriesSlice.categories

//   )
 


export const selectCategoryMap = createSelector(

  // console.log('selector fires')

  [selectCategoryReducer],
  (categoriesSlice)=> categoriesSlice.categories
   .reduce((acc,category) => {
    const {title,items} = category;
    acc[title.toLowerCase()] = items;

    return acc;
  },
  {})

  )


export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);























//    (state)=>
// state.categories.categories
//   .reduce((acc,category) => {
//     const {title,items} = category;
//     acc[title.toLowerCase()] = items;

//     return acc;

//   },{})


