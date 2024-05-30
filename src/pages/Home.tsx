import PostListItem from '../components/PostListItem';
import NoPostList from '../components/NoPostList';
import useGetPostList from "../queries/useGetPostList.ts";

const Home = () => {
  // const [postList, setPostList] = useState<IResponsePostList>([]);
  const {data: postList = [], isError, isLoading} = useGetPostList();

  if (isLoading) {
    return <div>...불러오는 중...</div>
  }

  if (postList.length === 0 || isError) {
    return <NoPostList />;
  }

  // const fetchPostList = async () => {
  //   const { data } = await getPostList();
  //   const sortedList = data.sort((postA, postB) => {
  //     if (postA.id >= postB.id) return -1;
  //     else return 1;
  //   });
  //   setPostList(sortedList);
  //   // setPostList(data);
  // };
  //
  // useEffect(() => {
  //   fetchPostList();
  // }, []);

  if (postList.length === 0) {
    return <NoPostList />;
  }

  return (
    <div>
      {postList.map(item => (
        <PostListItem key={item.id} id={`${item.id}`} title={item.title} contents={item.contents} tag={item.tag} />
      ))}
    </div>
  );
};

export default Home;
