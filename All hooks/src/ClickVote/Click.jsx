import {
    ClickVoteComponent,
    ClickVoteProvider,
    UpvoteStyle,
} from '@clickvote/react';
  
function Cli(){

    return (
        <ClickVoteProvider
          value={{
            apiUrl: "socket.clickvote.dev",
            publicKey: "pb_etj8iEBqpsv6JlgZr1b7k0DZFKHbYXhG",
            userId: "USER_ID"
          }}
        >
          <ClickVoteComponent id="dev" voteTo="VOTE_TO">
            {(props) => <LikeStyle {...props} />}
          </ClickVoteComponent>
        </ClickVoteProvider>
    );
      
}

export default Cli;