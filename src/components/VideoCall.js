// src/components/VideoCall.js
import React, { useState } from 'react';
// import { connect } from 'twilio-video';
import { connect, createLocalTracks } from 'twilio-video';
import './VideoCall.css';

function VideoCall({ token, roomName }) {
  const [room, setRoom] = useState(null);

  const joinRoom = async () => {
    try {
      // Create local video and audio tracks
      const localTracks = await createLocalTracks({
        video: { width: 640 },
        audio: true
      });

      // Connect to the Twilio room using the token and room name
      const room = await connect(token, {
        name: roomName,
        tracks: localTracks
      });

      // Set the room state to the connected room
      setRoom(room);

      // Attach local participant's video to the DOM
      room.localParticipant.tracks.forEach(publication => {
        const track = publication.track;
        document.getElementById('local-video').appendChild(track.attach());
      });

      // Handle remote participants joining the room
      room.on('participantConnected', participant => {
        participant.tracks.forEach(publication => {
          if (publication.isSubscribed) {
            const track = publication.track;
            document.getElementById('remote-video').appendChild(track.attach());
          }
        });

        participant.on('trackSubscribed', track => {
          document.getElementById('remote-video').appendChild(track.attach());
        });
      });
    } catch (error) {
      console.error('Error connecting to video room:', error);
    }
  };

  const leaveRoom = () => {
    room.disconnect();
    setRoom(null);
  };

  return (
    <div>
      <h2>Video Call Room</h2>
      {!room ? (
        <button onClick={joinRoom}>Join Room</button>
      ) : (
        <button onClick={leaveRoom}>Leave Room</button>
      )}
      <div id="local-video" style={{ width: '640px', height: '480px', margin: '10px', border: '1px solid black' }}>
        <h4>Local Video</h4>
      </div>
      <div id="remote-video" style={{ width: '640px', height: '480px', margin: '10px', border: '1px solid black' }}>
        <h4>Remote Video</h4>
      </div>
    </div>
  );
}

export default VideoCall;
