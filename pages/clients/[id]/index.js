import {useRouter} from "next/router";

function ClientProjectPage(){
    const router = useRouter();

    console.log(router.query);

    function loadProjectHandler(){
        //load data...
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {id:'max' , clientprojectid: 'projecta'},
        });
    }

    return(
        <div>
            <h1>The Client Project Page</h1>
            <button onClick={loadProjectHandler}>Load Project</button>
        </div>
    );
}

export default ClientProjectPage;