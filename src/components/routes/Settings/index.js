import React, { useState, useEffect } from 'react'

import { useAuth } from '../../../reducers'
import { copyToClipboard, triggerClickById } from '../../../helpers'
import { avatarDefault } from '../../../assets'
import { Tabs, Tab } from '../../commons'
import {
  Wrapper,
  Form,
  Label,
  FlexRow,
  Button,
  ProfileImage,
  ButtonLabel,
  FileInput,
  AvatarImage,
} from './styles'
import api from '../../../services/api'

const Settings = () => {
  const { authStore } = useAuth()

  const [username, setUsername] = useState('')
  const [profileLink, setProfileLink] = useState('')
  const [email, setEmail] = useState('')
  const [profileImage, setProfileImage] = useState(avatarDefault)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const triggerUsernameChange = (e) => {
    setUsername(e.target.value)
    setProfileLink(`https://newusedmedia.com/user/${e.target.value}`)
  }

  const changeProfileImage = (e) => {
    const files = Array.from(e.target.files)
    const targetId = e.target.id
    const formData = new FormData()
    const reader = new FileReader()

    reader.onload = () => {
      document.getElementById(`${targetId}Trigger`).value = formData.get(0).name
      setProfileImage(reader.result)
    }

    files.forEach((file, i) => {
      formData.append(i, file)
    })

    if (files[0] && formData.get(0).type.match('image.*')) {
      reader.readAsDataURL(formData.get(0))
    }
  }

  const setProfileImageBase64 = (str) => {
    setProfileImage(str)
    document.getElementById('fileTrigger').value = 'avatar_image.png'
  }

  useEffect(() => {
    if (authStore.user) {
      const user = { ...authStore.user }
      setUsername(user.username)
      setProfileLink(`https://newusedmedia.com/user/${user.username}`)
      setEmail(user.email)
      if (user.profileImage) setProfileImageBase64(user.profileImage)
    }
  }, [authStore.user])

  const handleSubmit1 = (e) => {
    e.preventDefault()
    console.log('Submitted', {
      username,
      email,
      profileImage,
    })

    api.put('/settings', { username, email, profileImage })
  }

  const handleSubmit2 = (e) => {
    e.preventDefault()
    if (confirmPassword === password) {
      console.log('Submitted', {
        password,
      })
      api.put('/password', { password })
    }
  }

  return authStore.loading ? (
    <p>Loading...</p>
  ) : (
    <Wrapper>
      <Tabs>
        <Tab label="Profile">
          {authStore.loading ? (
            <strong>Loading...</strong>
          ) : (
            <Form onSubmit={handleSubmit1}>
              <FlexRow>
                <Label htmlFor="username">
                  <span>Username</span>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    placeholder="Username"
                    onChange={triggerUsernameChange}
                  />
                </Label>
                <Label htmlFor="profileLink">
                  <span>Profile Link</span>
                  <input
                    type="text"
                    id="profileLink"
                    value={profileLink}
                    readOnly
                    placeholder="Profile Link"
                  />
                </Label>
                <Button onClick={() => copyToClipboard('profileLink')}>
                  Copy Link
                </Button>
              </FlexRow>
              <FlexRow>
                <Label htmlFor="email">
                  <span>Email Address</span>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    placeholder="Email Address"
                    onChange={e => setEmail(e.target.value)}
                  />
                </Label>
              </FlexRow>
              <FlexRow>
                <ProfileImage htmlFor="file">
                  <span>Change Profile Image</span>
                  <div>
                    <AvatarImage src={profileImage} />
                    <input
                      id="fileTrigger"
                      onClick={() => triggerClickById('file')}
                      readOnly
                    />
                    <FileInput id="file" onChange={changeProfileImage} />
                    <ButtonLabel htmlFor="file">Browse...</ButtonLabel>
                  </div>
                </ProfileImage>
              </FlexRow>
              <Button type="submit">Send</Button>
            </Form>
          )}
        </Tab>
        <Tab label="Password">
          <Form onSubmit={handleSubmit2}>
            <FlexRow>
              <Label htmlFor="password">
                <span>Password</span>
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
              </Label>
              <Label htmlFor="confirmPassword">
                <span>Confirm Password</span>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </Label>
            </FlexRow>
          </Form>
        </Tab>
      </Tabs>
    </Wrapper>
  )
}

export default Settings
