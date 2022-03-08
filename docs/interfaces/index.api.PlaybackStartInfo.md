[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / PlaybackStartInfo

# Interface: PlaybackStartInfo

[index](../modules/index.md).[api](../modules/index.api.md).PlaybackStartInfo

Class PlaybackStartInfo.

**`export`**

**`interface`** PlaybackStartInfo

## Table of contents

### Properties

- [AspectRatio](index.api.PlaybackStartInfo.md#aspectratio)
- [AudioStreamIndex](index.api.PlaybackStartInfo.md#audiostreamindex)
- [Brightness](index.api.PlaybackStartInfo.md#brightness)
- [CanSeek](index.api.PlaybackStartInfo.md#canseek)
- [IsMuted](index.api.PlaybackStartInfo.md#ismuted)
- [IsPaused](index.api.PlaybackStartInfo.md#ispaused)
- [Item](index.api.PlaybackStartInfo.md#item)
- [ItemId](index.api.PlaybackStartInfo.md#itemid)
- [LiveStreamId](index.api.PlaybackStartInfo.md#livestreamid)
- [MediaSourceId](index.api.PlaybackStartInfo.md#mediasourceid)
- [NowPlayingQueue](index.api.PlaybackStartInfo.md#nowplayingqueue)
- [PlayMethod](index.api.PlaybackStartInfo.md#playmethod)
- [PlaySessionId](index.api.PlaybackStartInfo.md#playsessionid)
- [PlaybackStartTimeTicks](index.api.PlaybackStartInfo.md#playbackstarttimeticks)
- [PlaylistItemId](index.api.PlaybackStartInfo.md#playlistitemid)
- [PositionTicks](index.api.PlaybackStartInfo.md#positionticks)
- [RepeatMode](index.api.PlaybackStartInfo.md#repeatmode)
- [SessionId](index.api.PlaybackStartInfo.md#sessionid)
- [SubtitleStreamIndex](index.api.PlaybackStartInfo.md#subtitlestreamindex)
- [VolumeLevel](index.api.PlaybackStartInfo.md#volumelevel)

## Properties

### AspectRatio

• `Optional` **AspectRatio**: ``null`` \| `string`

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:110](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L110)

___

### AudioStreamIndex

• `Optional` **AudioStreamIndex**: ``null`` \| `number`

Gets or sets the index of the audio stream.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:62](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L62)

___

### Brightness

• `Optional` **Brightness**: ``null`` \| `number`

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:104](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L104)

___

### CanSeek

• `Optional` **CanSeek**: `boolean`

Gets or sets a value indicating whether this instance can seek.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:32](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L32)

___

### IsMuted

• `Optional` **IsMuted**: `boolean`

Gets or sets a value indicating whether this instance is muted.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:80](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L80)

___

### IsPaused

• `Optional` **IsPaused**: `boolean`

Gets or sets a value indicating whether this instance is paused.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:74](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L74)

___

### Item

• `Optional` **Item**: [`BaseItemDto`](index.api.BaseItemDto.md)

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:38](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L38)

___

### ItemId

• `Optional` **ItemId**: `string`

Gets or sets the item identifier.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:44](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L44)

___

### LiveStreamId

• `Optional` **LiveStreamId**: ``null`` \| `string`

Gets or sets the live stream identifier.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:122](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L122)

___

### MediaSourceId

• `Optional` **MediaSourceId**: ``null`` \| `string`

Gets or sets the media version identifier.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:56](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L56)

___

### NowPlayingQueue

• `Optional` **NowPlayingQueue**: ``null`` \| [`QueueItem`](index.api.QueueItem.md)[]

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:140](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L140)

___

### PlayMethod

• `Optional` **PlayMethod**: [`PlayMethod`](../enums/index.api.PlayMethod.md)

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:116](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L116)

___

### PlaySessionId

• `Optional` **PlaySessionId**: ``null`` \| `string`

Gets or sets the play session identifier.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:128](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L128)

___

### PlaybackStartTimeTicks

• `Optional` **PlaybackStartTimeTicks**: ``null`` \| `number`

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:92](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L92)

___

### PlaylistItemId

• `Optional` **PlaylistItemId**: ``null`` \| `string`

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:146](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L146)

___

### PositionTicks

• `Optional` **PositionTicks**: ``null`` \| `number`

Gets or sets the position ticks.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:86](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L86)

___

### RepeatMode

• `Optional` **RepeatMode**: [`RepeatMode`](../enums/index.api.RepeatMode.md)

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:134](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L134)

___

### SessionId

• `Optional` **SessionId**: ``null`` \| `string`

Gets or sets the session id.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L50)

___

### SubtitleStreamIndex

• `Optional` **SubtitleStreamIndex**: ``null`` \| `number`

Gets or sets the index of the subtitle stream.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:68](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L68)

___

### VolumeLevel

• `Optional` **VolumeLevel**: ``null`` \| `number`

Gets or sets the volume level.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:98](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-start-info.ts#L98)