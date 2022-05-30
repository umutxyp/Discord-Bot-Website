import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Oh. It seems there is a 500 Internal Server Error. Please try again later!"} />
}

export default UnkownPage;