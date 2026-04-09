export type GetTrackDetailsOutputData = {
    id: string
    attributes: {
      title: string
      lyrics: string | null
    }
}

type GetTrackDetailOutput = {
    data: GetTrackDetailsOutputData
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
                      headers: {
                              'api-key': '7b8fcfe7-1e47-4fe4-904f-c0f653d2dc8c'
                              }
                        }).then(res => res.json())

        return promise
    }

    type AttachmentDto = {
  url: string
}
type TrackListItemOutputAttribites = {
  title: string
    attachments: Array<AttachmentDto>
}

export type TrackListItemOutput = {
  id: string
  attributes: TrackListItemOutputAttribites
}

type GetTrackListOutput = {
    data: Array<TrackListItemOutput>
}

export const getTracks = () => {
   const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
          'api-key': '7b8fcfe7-1e47-4fe4-904f-c0f653d2dc8c'
        }
      }).then(res => res.json())
      return promise
}