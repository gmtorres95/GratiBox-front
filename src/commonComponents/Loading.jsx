import Loader from 'react-loader-spinner';

export default function Loading() {
  return (
    <Loader
      type="ThreeDots"
      color="#FFF"
      height={'100%'}
      width={100}
    />
  );
}