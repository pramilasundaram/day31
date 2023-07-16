        import { CREATE_STUDENT,
             CREATE_TEACHER,
              DELETE_STUDENT, 
              DELETE_TEACHER, 
              UPDATE_STUDENT, 
              UPDATE_TEACHER 
            } from "./Action.type";
        const Reducer = (state, action) => {
            switch (action.type) {
                case CREATE_STUDENT:
                   
                    return { 
                        ...state,
                        student:
                        [...state.student, action.payload] ,
                        studentcount:state.studentcount+1
                    }
                case DELETE_STUDENT:
                    return { 
                        ...state,
                        student: 
                        state.student.filter(
                            (value) => value.id !== action.payload),
                        studentcount:state.studentcount-1
                    }
                case UPDATE_STUDENT:

                    let index = state.student.findIndex(
                        (value) => value.id === action.payload.id); 
                    let tempstudent = state.student;
                    tempstudent[index] = action.payload;
                    return { 
                        ...state, 
                        student: [...tempstudent]
                    }
                case CREATE_TEACHER:
                    return {
                        ...state, 
                        teacher: [...state.teacher, action.payload],
                        teachercount:state.teachercount+1
                    }
                case DELETE_TEACHER:
                    return { ...state,
                        teacher: state.teacher.filter(
                            (value) => value.id !== action.payload),
                        teachercount:state.teachercount-1
                    }
                case UPDATE_TEACHER:

                    let ind = state.teacher.findIndex(
                        (value) => value.id === action.payload.id);
                    let tempteacher = state.teacher;
                    tempteacher[ind] = action.payload;
                    return { 
                        ...state,
                        teacher: 
                        [...tempteacher] 
                    }
                default:
                    return state;
            }
        }
        export default Reducer;