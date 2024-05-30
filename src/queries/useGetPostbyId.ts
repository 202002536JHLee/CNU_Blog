import {getPostById} from "../api";
import {useQuery} from "@tanstack/react-query";

const useGetPostbyId = (postId : string) => {
    const fetcher = async () => {
        const {data} = await getPostById(postId);
        return data;
    };

    return useQuery({
        queryKey : ['getPostListById', postId],
        queryFn : fetcher,
        enabled : !!postId,
    });
};

export default useGetPostbyId;