const UserValidation = (values) => {
    const errors={};
    if(!values.name || values.name===""){
        errors.name="Please input name"
    }
    if(!values.address || values.address===""){
        errors.address="Please input address"
    }
    if(!values.age || values.age===""){
        errors.age="Please input age"
    }
    if(!values.phone || values.phone===""){
        errors.phone="Please input phone number"
    }

    return errors;
}

export default UserValidation
