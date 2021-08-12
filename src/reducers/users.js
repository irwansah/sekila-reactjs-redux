
  let initialState = {
    title:"Sekila",
    users:[
        {
         id:1,
         nama:"irwan",
         alamat:"cianjur",
         umur:"23",
         nohp:"085814429029"
        },
        {
         id:2,
         nama:"arwin",
         alamat:"cianjur",
         umur:"21",
         nohp:"085814429029"
        },
        {
         id:3,
         nama:"irma",
         alamat:"cianjur",
         umur:"22",
         nohp:"085814429029"
        },

      ],
      error:false
  };
  
  const users = (state = initialState, action) => {
    return state;
  };
  
  export default users;