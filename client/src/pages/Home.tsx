import { ChevronRight, Trophy, Calendar, Users, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

/**
 * Design System: Modern Sports Dashboard
 * - Navy (#1a3a52) primary with neon orange (#ff6b35) accents
 * - Montserrat for headers, Inter for body text
 * - Data-focused cards with smooth animations
 * - Single page scrollable layout
 */

export default function Home() {

  // Team data
  const teamData = {
    name: 'Noa Porter',
    record: '4-3',
    standing: '2nd',
    stats: {
      wins: 4,
      losses: 3,
      pointsFor: 239,
      pointsAgainst: 189,
      pointDiff: 50,
    },
  };

  // Schedule data
  const schedule = [
    { date: 'Sat, Jan 10', time: '11:00 AM', opponent: 'Ryan Dotters/Andrew Gordon', homeScore: 38, awayScore: 17, isHome: true, result: 'W', court: 'Court 1 (North)' },
    { date: 'Fri, Jan 16', time: '5:00 PM', opponent: 'Matthew Tanner/Jim Murphy', homeScore: 33, awayScore: 32, isHome: false, result: 'L', court: 'Court 1 (North)' },
    { date: 'Fri, Jan 23', time: '5:00 PM', opponent: 'Steve Ludwig/Brett Feuerstein', homeScore: 24, awayScore: 34, isHome: false, result: 'W', court: 'Court 1 (North)' },
    { date: 'Wed, Jan 28', time: '4:30 PM', opponent: 'Derek Belch', homeScore: 39, awayScore: 24, isHome: true, result: 'W', court: 'West Court' },
    { date: 'Fri, Feb 6', time: '4:00 PM', opponent: 'Tim Lewis/Tristan Poh', homeScore: 46, awayScore: 26, isHome: true, result: 'W', court: 'Court 1 (North)' },
    { date: 'Wed, Feb 11', time: '4:30 PM', opponent: 'Ryan Dotters/Andrew Gordon', homeScore: 25, awayScore: 23, isHome: false, result: 'L', court: 'West Court' },
    { date: 'Wed, Feb 18', time: '4:30 PM', opponent: 'Matthew Tanner/Jim Murphy', homeScore: 27, awayScore: 40, isHome: true, result: 'L', court: 'West Court' },
    { date: 'Wed, Mar 4', time: '5:30 PM', opponent: 'Tim Lewis/Tristan Poh', homeScore: 40, awayScore: 20, isHome: true, result: 'W', type: 'Playoffs', court: 'West Court' },
    { date: 'Sat, Mar 7', time: '12:00 PM', opponent: 'Ryan Dotters/Andrew Gordon', homeScore: 28, awayScore: 31, isHome: false, result: 'W', type: 'Playoffs', court: 'Court 2 (South)' },
  ];

  // Standings data
  const standings = [
    { seed: 1, team: 'Ryan Dotters/Andrew Gordon', w: 5, l: 2, pd: 12, ps: 169, pa: 157 },
    { seed: 2, team: 'Noa Porter', w: 4, l: 3, pd: 50, ps: 239, pa: 189, isTeam: true },
    { seed: 3, team: 'Tim Lewis/Tristan Poh', w: 4, l: 3, pd: -13, ps: 140, pa: 153 },
    { seed: 4, team: 'Steve Ludwig/Brett Feuerstein', w: 3, l: 4, pd: 30, ps: 177, pa: 147 },
    { seed: 5, team: 'Matthew Tanner/Jim Murphy', w: 3, l: 4, pd: -36, ps: 207, pa: 243 },
    { seed: 6, team: 'Derek Belch', w: 2, l: 5, pd: -43, ps: 131, pa: 174 },
  ];

  // Roster (placeholder - user will provide)
  const roster = [
    { number: 5, name: 'Player Name', position: 'Guard' },
    { number: 12, name: 'Player Name', position: 'Forward' },
    { number: 23, name: 'Player Name', position: 'Center' },
    { number: 3, name: 'Player Name', position: 'Guard' },
    { number: 14, name: 'Player Name', position: 'Forward' },
  ];

  // Game videos (placeholder - user will provide)
  const videos = [
    { date: 'Mar 7, 2026', opponent: 'Ryan Dotters/Andrew Gordon', videoUrl: '', thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663430570794/AbBKuvHZk8eVm2TiCvWcVU/basketball-action-shot-CeTKNJZcNidv92uSUEoELt.webp' },
    { date: 'Mar 4, 2026', opponent: 'Tim Lewis/Tristan Poh', videoUrl: '', thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663430570794/AbBKuvHZk8eVm2TiCvWcVU/team-celebration-Ma7Fcm93dQZSehrvjEAoHQ.webp' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <span className="text-white font-bold text-lg">NP</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">Noa Porter</h1>
              <p className="text-xs text-muted-foreground">Carmel Valley Basketball</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary to-primary/90 text-white py-16 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663430570794/AbBKuvHZk8eVm2TiCvWcVU/basketball-pattern-RpXwyBjW7pxfW6VgU8kEi3.webp" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Montserrat' }}>
                {teamData.name}
              </h2>
              <p className="text-xl text-white/90 mb-8">4th Grade Boys Basketball</p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-white/70 mb-2">Record</p>
                  <p className="text-3xl font-bold text-accent">{teamData.record}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-white/70 mb-2">Standing</p>
                  <p className="text-3xl font-bold text-accent">{teamData.standing}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-white/70 mb-2">Point Diff</p>
                  <p className="text-3xl font-bold text-accent">+{teamData.stats.pointDiff}</p>
                </div>
              </div>

              <Button className="bg-accent hover:bg-accent/90 text-white gap-2">
                View Full Stats <ChevronRight size={18} />
              </Button>
            </div>

            <div className="relative min-h-96 md:min-h-full hidden md:block">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663430570794/AbBKuvHZk8eVm2TiCvWcVU/youth-player-hero-hUbaz7ieaC8kt2iy7BPajH.webp" 
                alt="Youth basketball player" 
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - All Sections */}
      <main className="container py-16 space-y-20">
        
        {/* Game Schedule Section */}
        <section id="schedule">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Montserrat' }}>
              <Calendar className="inline-block mr-3 text-accent" size={32} />
              Game Schedule
            </h2>
            <p className="text-muted-foreground">All games for the 2025/26 season</p>
          </div>

          <div className="max-h-96 overflow-y-auto pr-4 custom-scrollbar">
            <div className="space-y-4">
              {schedule.map((game, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                          game.result === 'W' ? 'bg-green-500' : 'bg-red-500'
                        }`}>
                          {game.result}
                        </span>
                        {game.type && <span className="px-2 py-1 rounded text-xs font-bold bg-accent text-white">{game.type}</span>}
                      </div>
                      <p className="font-semibold text-foreground">{game.opponent}</p>
                      <p className="text-sm text-muted-foreground">{game.date} at {game.time}</p>
                      <p className="text-xs text-accent font-semibold mt-1">{game.court}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <div className={`text-center ${game.isHome ? 'order-2' : 'order-1'}`}>
                          <p className="text-2xl font-bold text-primary">{game.isHome ? game.homeScore : game.awayScore}</p>
                          <p className="text-xs text-muted-foreground">{game.isHome ? 'Noa Porter' : 'Opponent'}</p>
                        </div>
                        <p className="text-muted-foreground font-semibold">-</p>
                        <div className={`text-center ${game.isHome ? 'order-1' : 'order-2'}`}>
                          <p className="text-2xl font-bold text-primary">{game.isHome ? game.awayScore : game.homeScore}</p>
                          <p className="text-xs text-muted-foreground">{game.isHome ? 'Opponent' : 'Noa Porter'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* League Standings Section */}
        <section id="standings">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Montserrat' }}>
              <Trophy className="inline-block mr-3 text-accent" size={32} />
              League Standings
            </h2>
            <p className="text-muted-foreground">Current season standings</p>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 text-left font-semibold">Seed</th>
                    <th className="px-6 py-4 text-left font-semibold">Team</th>
                    <th className="px-6 py-4 text-center font-semibold">W</th>
                    <th className="px-6 py-4 text-center font-semibold">L</th>
                    <th className="px-6 py-4 text-center font-semibold">PD</th>
                    <th className="px-6 py-4 text-center font-semibold">PF</th>
                    <th className="px-6 py-4 text-center font-semibold">PA</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.map((team, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-t border-border transition-colors ${
                        team.isTeam ? 'bg-accent/10' : 'hover:bg-muted'
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold text-primary">{team.seed}</td>
                      <td className={`px-6 py-4 font-semibold ${team.isTeam ? 'text-accent' : 'text-foreground'}`}>
                        {team.team}
                      </td>
                      <td className="px-6 py-4 text-center text-foreground">{team.w}</td>
                      <td className="px-6 py-4 text-center text-foreground">{team.l}</td>
                      <td className={`px-6 py-4 text-center font-semibold ${team.pd >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {team.pd >= 0 ? '+' : ''}{team.pd}
                      </td>
                      <td className="px-6 py-4 text-center text-foreground">{team.ps}</td>
                      <td className="px-6 py-4 text-center text-foreground">{team.pa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Game Videos Section */}
        <section id="videos">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Montserrat' }}>
              <Play className="inline-block mr-3 text-accent" size={32} />
              Game Videos
            </h2>
            <p className="text-muted-foreground">Watch highlights from recent games</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video bg-muted overflow-hidden group">
                  <img 
                    src={video.thumbnail} 
                    alt={`Game vs ${video.opponent}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-accent text-white rounded-full p-4 hover:bg-accent/90 transition-colors">
                      <Play size={32} fill="currentColor" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{video.date}</p>
                  <h3 className="text-lg font-bold text-foreground mb-4">vs {video.opponent}</h3>
                  {video.videoUrl ? (
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white gap-2">
                      <Play size={18} />
                      Watch Video
                    </Button>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-2">Video coming soon</p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Roster Section */}
        <section id="roster">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Montserrat' }}>
              <Users className="inline-block mr-3 text-accent" size={32} />
              Team Roster
            </h2>
            <p className="text-muted-foreground">Meet the Noa Porter team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roster.map((player, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-accent">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">#{player.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{player.name}</h3>
                  <p className="text-sm text-accent font-semibold mb-4">{player.position}</p>
                  <Button variant="outline" className="w-full" size="sm">
                    View Stats
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 mt-20">
        <div className="container text-center">
          <p className="text-white/80">Noa Porter Basketball Team | Carmel Valley 2025/26 Season</p>
          <p className="text-white/60 text-sm mt-2">Last updated: March 12, 2026</p>
        </div>
      </footer>
    </div>
  );
}
