import post from '../../post.jpg';
import PropTypes from 'prop-types';
import More from "./PostModalForm/More";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

function Post(props) {
    const date = new Date(props.postDate);
    let postStatus;
    props.postAvailableTo === 1 ? postStatus = 'All' : postStatus = 'Friends';
    return (
        <Card className='Post'
              sx={{minWidth: 275, maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px'}}>
            <CardContent>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <div>{date.getFullYear().toString() + "-" + ((date.getMonth() + 1).toString().length == 2 ? (date.getMonth() + 1).toString() : "0" + (date.getMonth() + 1).toString()) + "-" + (date.getDate().toString().length == 2 ? date.getDate().toString() : "0" + date.getDate().toString()) + " " + (date.getHours().toString().length == 2 ? date.getHours().toString() : "0" + date.getHours().toString()) + ":" + ((parseInt(date.getMinutes() / 5) * 5).toString().length == 2 ? (parseInt(date.getMinutes() / 5) * 5).toString() : "0" + (parseInt(date.getMinutes() / 5) * 5).toString()) + ":00"}</div>
                    <More postId={props.PostID} title={props.Title} text={props.Text}
                          postAvailableTo={postStatus}/>
                </Box>
                <Typography variant="h5" component="div" align='center'>
                    {props.Title}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    {props.Text}
                </Typography>

            </CardContent>
        </Card>
    )
        ;
}

// eslint-disable-next-line react/no-typos
Post.propTypes =
    {
        Title: PropTypes.string.isRequired,
        Text: PropTypes.string.isRequired,
        PostID: PropTypes.number.isRequired,
        postDate: PropTypes.string.isRequired,
        postAvailableTo: PropTypes.number.isRequired
    }
export default Post;