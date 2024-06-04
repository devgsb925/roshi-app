import type { Prediction } from './predicton.type'

export class PredictionService {
  private data: Prediction[] = [
    {
      id: 1,
      poster: 'entry1.jpg',
      matchInfo: 'Dallas Maverics VS Minesota Timberwolves GM7',
      schedule: '5/29/2024 7:30:55',
      oddDetail: 'Minesota Timberwolves +3',
      link1: 'https://www.facebook.com/61558836936424/videos/683596580559459',
      link2: 'https://www.facebook.com/61558836936424/videos/683596580559459',
      link3: 'https://www.facebook.com/61558836936424/videos/683596580559459',
      introduction:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, dolor sit amet tristique accumsan, purus augue iaculis sem, ac hendrerit massa nisi iaculis lectus. Donec sed ipsum in nulla blandit iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eu scelerisque ex, sit amet sagittis enim. Pellentesque elementum ipsum leo, eu vulputate neque consequat ac. Cras fermentum leo ut lorem interdum, iaculis semper metus suscipit. Morbi id ipsum eu tellus facilisis posuere vel a dolor. Nullam fermentum sed elit quis viverra. Proin efficitur, felis a volutpat fermentum, eros eros pretium tellus, id porta libero est sed orci. Morbi eu cursus felis. Donec in hendrerit metus, eget pretium elit. Praesent id arcu vitae dolor aliquet aliquet. Quisque imperdiet lobortis risus, a rhoncus metus lobortis ut. Vivamus vel tortor non metus malesuada vestibulum.',
      roshiPredicton:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, dolor sit amet tristique accumsan, purus augue iaculis sem, ac hendrerit massa nisi iaculis lectus. Donec sed ipsum in nulla blandit iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eu scelerisque ex, sit amet sagittis enim. Pellentesque elementum ipsum leo, eu vulputate neque consequat ac. Cras fermentum leo ut lorem interdum, iaculis semper metus suscipit. Morbi id ipsum eu tellus facilisis posuere vel a dolor. Nullam fermentum sed elit quis viverra. Proin efficitur, felis a volutpat fermentum, eros eros pretium tellus, id porta libero est sed orci. Morbi eu cursus felis. Donec in hendrerit metus, eget pretium elit. Praesent id arcu vitae dolor aliquet aliquet. Quisque imperdiet lobortis risus, a rhoncus metus lobortis ut. Vivamus vel tortor non metus malesuada vestibulum.',
      winner: 'Minesota Timberwolves by 3 (89-86)',
      onPoint: true,
      archive: true
    },
    {
      id: 2,
      poster: 'entry2.jpg',
      matchInfo: 'Boston Celtics VS Indiana Pacers GM7',
      schedule: '5/29/2024 14:20:35',
      oddDetail: 'Indiana Pacers +5',
      link1: 'https://www.facebook.com/61558836936424/videos/683596580559459',
      link2: 'https://www.facebook.com/61558836936424/videos/683596580559459',
      link3: 'https://www.facebook.com/61558836936424/videos/683596580559459',
      introduction:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, dolor sit amet tristique accumsan, purus augue iaculis sem, ac hendrerit massa nisi iaculis lectus. Donec sed ipsum in nulla blandit iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eu scelerisque ex, sit amet sagittis enim. Pellentesque elementum ipsum leo, eu vulputate neque consequat ac. Cras fermentum leo ut lorem interdum, iaculis semper metus suscipit. Morbi id ipsum eu tellus facilisis posuere vel a dolor. Nullam fermentum sed elit quis viverra. Proin efficitur, felis a volutpat fermentum, eros eros pretium tellus, id porta libero est sed orci. Morbi eu cursus felis. Donec in hendrerit metus, eget pretium elit. Praesent id arcu vitae dolor aliquet aliquet. Quisque imperdiet lobortis risus, a rhoncus metus lobortis ut. Vivamus vel tortor non metus malesuada vestibulum.',
      roshiPredicton:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, dolor sit amet tristique accumsan, purus augue iaculis sem, ac hendrerit massa nisi iaculis lectus. Donec sed ipsum in nulla blandit iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eu scelerisque ex, sit amet sagittis enim. Pellentesque elementum ipsum leo, eu vulputate neque consequat ac. Cras fermentum leo ut lorem interdum, iaculis semper metus suscipit. Morbi id ipsum eu tellus facilisis posuere vel a dolor. Nullam fermentum sed elit quis viverra. Proin efficitur, felis a volutpat fermentum, eros eros pretium tellus, id porta libero est sed orci. Morbi eu cursus felis. Donec in hendrerit metus, eget pretium elit. Praesent id arcu vitae dolor aliquet aliquet. Quisque imperdiet lobortis risus, a rhoncus metus lobortis ut. Vivamus vel tortor non metus malesuada vestibulum.',
      winner: 'Boston Celtics by 2 (105-103)',
      onPoint: false,
      archive: true
    },
    {
      id: 3,
      poster: 'entry3.jpg',
      matchInfo: 'Denver Nuggets VS Oklahoma City Thunder GM7',
      schedule: '5/29/2024 16:10:25',
      oddDetail: 'Oklahoma City Thunder +3',
      link1: 'https://www.facebook.com/61558836936424/videos/683596580559459',
      link2: 'https://www.facebook.com/61558836936424/videos/683596580559459',
      link3: 'https://www.facebook.com/61558836936424/videos/683596580559459',
      introduction:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, dolor sit amet tristique accumsan, purus augue iaculis sem, ac hendrerit massa nisi iaculis lectus. Donec sed ipsum in nulla blandit iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eu scelerisque ex, sit amet sagittis enim. Pellentesque elementum ipsum leo, eu vulputate neque consequat ac. Cras fermentum leo ut lorem interdum, iaculis semper metus suscipit. Morbi id ipsum eu tellus facilisis posuere vel a dolor. Nullam fermentum sed elit quis viverra. Proin efficitur, felis a volutpat fermentum, eros eros pretium tellus, id porta libero est sed orci. Morbi eu cursus felis. Donec in hendrerit metus, eget pretium elit. Praesent id arcu vitae dolor aliquet aliquet. Quisque imperdiet lobortis risus, a rhoncus metus lobortis ut. Vivamus vel tortor non metus malesuada vestibulum.',
      roshiPredicton:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, dolor sit amet tristique accumsan, purus augue iaculis sem, ac hendrerit massa nisi iaculis lectus. Donec sed ipsum in nulla blandit iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eu scelerisque ex, sit amet sagittis enim. Pellentesque elementum ipsum leo, eu vulputate neque consequat ac. Cras fermentum leo ut lorem interdum, iaculis semper metus suscipit. Morbi id ipsum eu tellus facilisis posuere vel a dolor. Nullam fermentum sed elit quis viverra. Proin efficitur, felis a volutpat fermentum, eros eros pretium tellus, id porta libero est sed orci. Morbi eu cursus felis. Donec in hendrerit metus, eget pretium elit. Praesent id arcu vitae dolor aliquet aliquet. Quisque imperdiet lobortis risus, a rhoncus metus lobortis ut. Vivamus vel tortor non metus malesuada vestibulum.',
      winner: '',
      onPoint: false,
      archive: false
    },
    {
      id: 4,
      poster: 'entry4.jpg',
      matchInfo: 'Los Angeles Clippers VS Phoenix Suns GM7',
      schedule: '5/29/2024 3:10:25',
      oddDetail: 'Phoenix Suns +5',
      link1: 'https://www.facebook.com/61558836936424/videos/683596580559459',
      link2: 'https://www.facebook.com/61558836936424/videos/683596580559459',
      link3: 'https://www.facebook.com/61558836936424/videos/683596580559459',
      introduction:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, dolor sit amet tristique accumsan, purus augue iaculis sem, ac hendrerit massa nisi iaculis lectus. Donec sed ipsum in nulla blandit iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eu scelerisque ex, sit amet sagittis enim. Pellentesque elementum ipsum leo, eu vulputate neque consequat ac. Cras fermentum leo ut lorem interdum, iaculis semper metus suscipit. Morbi id ipsum eu tellus facilisis posuere vel a dolor. Nullam fermentum sed elit quis viverra. Proin efficitur, felis a volutpat fermentum, eros eros pretium tellus, id porta libero est sed orci. Morbi eu cursus felis. Donec in hendrerit metus, eget pretium elit. Praesent id arcu vitae dolor aliquet aliquet. Quisque imperdiet lobortis risus, a rhoncus metus lobortis ut. Vivamus vel tortor non metus malesuada vestibulum.',
      roshiPredicton:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, dolor sit amet tristique accumsan, purus augue iaculis sem, ac hendrerit massa nisi iaculis lectus. Donec sed ipsum in nulla blandit iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eu scelerisque ex, sit amet sagittis enim. Pellentesque elementum ipsum leo, eu vulputate neque consequat ac. Cras fermentum leo ut lorem interdum, iaculis semper metus suscipit. Morbi id ipsum eu tellus facilisis posuere vel a dolor. Nullam fermentum sed elit quis viverra. Proin efficitur, felis a volutpat fermentum, eros eros pretium tellus, id porta libero est sed orci. Morbi eu cursus felis. Donec in hendrerit metus, eget pretium elit. Praesent id arcu vitae dolor aliquet aliquet. Quisque imperdiet lobortis risus, a rhoncus metus lobortis ut. Vivamus vel tortor non metus malesuada vestibulum.',
      winner: '',
      onPoint: false,
      archive: false
    },
    {
      id: 5,
      poster: 'entry5.jpg',
      matchInfo: 'Miami Heat VS New York Knicks GM7',
      schedule: '5/29/2024 3:10:25',
      oddDetail: 'Miami Heat +7',
      link1: 'https://www.facebook.com/61558836936424/videos/683596580559459',
      link2: 'https://www.facebook.com/61558836936424/videos/683596580559459',
      link3: 'https://www.facebook.com/61558836936424/videos/683596580559459',
      introduction:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, dolor sit amet tristique accumsan, purus augue iaculis sem, ac hendrerit massa nisi iaculis lectus. Donec sed ipsum in nulla blandit iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eu scelerisque ex, sit amet sagittis enim. Pellentesque elementum ipsum leo, eu vulputate neque consequat ac. Cras fermentum leo ut lorem interdum, iaculis semper metus suscipit. Morbi id ipsum eu tellus facilisis posuere vel a dolor. Nullam fermentum sed elit quis viverra. Proin efficitur, felis a volutpat fermentum, eros eros pretium tellus, id porta libero est sed orci. Morbi eu cursus felis. Donec in hendrerit metus, eget pretium elit. Praesent id arcu vitae dolor aliquet aliquet. Quisque imperdiet lobortis risus, a rhoncus metus lobortis ut. Vivamus vel tortor non metus malesuada vestibulum.',
      roshiPredicton:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, dolor sit amet tristique accumsan, purus augue iaculis sem, ac hendrerit massa nisi iaculis lectus. Donec sed ipsum in nulla blandit iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eu scelerisque ex, sit amet sagittis enim. Pellentesque elementum ipsum leo, eu vulputate neque consequat ac. Cras fermentum leo ut lorem interdum, iaculis semper metus suscipit. Morbi id ipsum eu tellus facilisis posuere vel a dolor. Nullam fermentum sed elit quis viverra. Proin efficitur, felis a volutpat fermentum, eros eros pretium tellus, id porta libero est sed orci. Morbi eu cursus felis. Donec in hendrerit metus, eget pretium elit. Praesent id arcu vitae dolor aliquet aliquet. Quisque imperdiet lobortis risus, a rhoncus metus lobortis ut. Vivamus vel tortor non metus malesuada vestibulum.',
      winner: '',
      onPoint: false,
      archive: false
    }
  ]
  async getMany(): Promise<Prediction[]> {
    return this.data
  }
}

export const predictionService = new PredictionService()
