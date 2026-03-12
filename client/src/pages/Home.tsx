import { useState } from 'react';
import { ChevronRight, Trophy, Calendar, Users, Play, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * Design System: Modern Sports Dashboard
 * - Navy (#1a3a52) primary with neon orange (#ff6b35) accents
 * - Montserrat for headers, Inter for body text
 * - Data-focused cards with smooth animations
 * - Basketball court pattern dividers
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState('schedule');

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
    { date: 'Sat, Jan 10', time: '11:00 AM', opponent: 'Ryan Dotters/Andrew Gordon', homeScore: 38, awayScore: 17, isHome: true, result: 'W' },
    { date: 'Fri, Jan 16', time: '5:00 PM', opponent: 'Matthew Tanner/Jim Murphy', homeScore: 33, awayScore: 32, isHome: false, result: 'L' },
    { date: 'Fri, Jan 23', time: '5:00 PM', opponent: 'Steve Ludwig/Brett Feuerstein', homeScore: 24, awayScore: 34, isHome: false, result: 'W' },
    { date: 'Wed, Jan 28', time: '4:30 PM', opponent: 'Derek Belch', homeScore: 39, awayScore: 24, isHome: true, result: 'W' },
    { date: 'Fri, Feb 6', time: '4:00 PM', opponent: 'Tim Lewis/Tristan Poh', homeScore: 46, awayScore: 26, isHome: true, result: 'W' },
    { date: 'Wed, Feb 11', time: '4:30 PM', opponent: 'Ryan Dotters/Andrew Gordon', homeScore: 25, awayScore: 23, isHome: false, result: 'L' },
    { date: 'Wed, Feb 18', time: '4:30 PM', opponent: 'Matthew Tanner/Jim Murphy', homeScore: 27, awayScore: 40, isHome: true, result: 'L' },
    { date: 'Wed, Mar 4', time: '5:30 PM', opponent: 'Tim Lewis/Tristan Poh', homeScore: 40, awayScore: 20, isHome: true, result: 'W', type: 'Playoffs' },
    { date: 'Sat, Mar 7', time: '12:00 PM', opponent: 'Ryan Dotters/Andrew Gordon', homeScore: 28, awayScore: 31, isHome: false, result: 'W', type: 'Playoffs' },
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
          <nav className="hidden md:flex gap-8">
            <button onClick={() => setActiveTab('schedule')} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Schedule</button>
            <button onClick={() => setActiveTab('standings')} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Standings</button>
            <button onClick={() => setActiveTab('roster')} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Roster</button>
            <button onClick={() => setActiveTab('videos')} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Videos</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary to-primary/90 text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663430570794/AbBKuvHZk8eVm2TiCvWcVU/basketball-pattern-RpXwyBjW7pxfW6VgU8kEi3.webp" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Noa Porter</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">4th Grade Boys Basketball</p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-sm text-blue-200 mb-1">Record</p>
                  <p className="text-4xl font-bold text-accent">{teamData.record}</p>
                </div>
                <div>
                  <p className="text-sm text-blue-200 mb-1">Standing</p>
                  <p className="text-4xl font-bold text-accent">{teamData.standing}</p>
                </div>
                <div>
                  <p className="text-sm text-blue-200 mb-1">Point Diff</p>
                  <p className="text-4xl font-bold text-accent">+{teamData.stats.pointDiff}</p>
                </div>
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                View Full Stats <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="hidden md:block">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663430570794/AbBKuvHZk8eVm2TiCvWcVU/youth-basketball-player-NLpxMmghDBU3uSsxvWjP3p.webp" alt="Youth basketball player" className="rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="bg-secondary/30 py-12 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Card className="p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">Wins</p>
              <p className="text-3xl font-bold text-primary">{teamData.stats.wins}</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">Losses</p>
              <p className="text-3xl font-bold text-destructive">{teamData.stats.losses}</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">Points For</p>
              <p className="text-3xl font-bold text-accent">{teamData.stats.pointsFor}</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">Points Against</p>
              <p className="text-3xl font-bold text-primary">{teamData.stats.pointsAgainst}</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">Point Diff</p>
              <p className="text-3xl font-bold text-accent">+{teamData.stats.pointDiff}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="schedule" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Schedule</span>
              </TabsTrigger>
              <TabsTrigger value="standings" className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span className="hidden sm:inline">Standings</span>
              </TabsTrigger>
              <TabsTrigger value="roster" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Roster</span>
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                <span className="hidden sm:inline">Videos</span>
              </TabsTrigger>
            </TabsList>

            {/* Schedule Tab */}
            <TabsContent value="schedule" className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary">Game Schedule</h2>
                <span className="text-sm text-muted-foreground">{schedule.length} games</span>
              </div>
              <div className="space-y-3">
                {schedule.map((game, idx) => (
                  <Card key={idx} className="p-4 hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-accent">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${game.result === 'W' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {game.result}
                          </span>
                          {game.type && <span className="px-2 py-1 rounded text-xs font-bold bg-accent text-white">{game.type}</span>}
                        </div>
                        <p className="font-semibold text-foreground">{game.opponent}</p>
                        <p className="text-sm text-muted-foreground">{game.date} at {game.time}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <div className={`text-center ${game.isHome ? 'order-2' : 'order-1'}`}>
                            <p className="text-2xl font-bold text-primary">{game.isHome ? game.homeScore : game.awayScore}</p>
                            <p className="text-xs text-muted-foreground">{game.isHome ? 'Home' : 'Away'}</p>
                          </div>
                          <span className="text-muted-foreground">-</span>
                          <div className={`text-center ${game.isHome ? 'order-1' : 'order-2'}`}>
                            <p className="text-2xl font-bold text-muted-foreground">{game.isHome ? game.awayScore : game.homeScore}</p>
                            <p className="text-xs text-muted-foreground">{game.isHome ? 'Away' : 'Home'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Standings Tab */}
            <TabsContent value="standings">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary">League Standings</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-primary">
                      <th className="text-left py-3 px-4 font-bold text-primary">Seed</th>
                      <th className="text-left py-3 px-4 font-bold text-primary">Team</th>
                      <th className="text-center py-3 px-4 font-bold text-primary">W</th>
                      <th className="text-center py-3 px-4 font-bold text-primary">L</th>
                      <th className="text-center py-3 px-4 font-bold text-primary">PD</th>
                      <th className="text-center py-3 px-4 font-bold text-primary">PF</th>
                      <th className="text-center py-3 px-4 font-bold text-primary">PA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standings.map((team, idx) => (
                      <tr key={idx} className={`border-b border-border ${team.isTeam ? 'bg-accent/10' : ''}`}>
                        <td className="py-3 px-4 font-bold text-primary">{team.seed}</td>
                        <td className="py-3 px-4 font-semibold text-foreground">{team.team}</td>
                        <td className="py-3 px-4 text-center font-bold text-green-600">{team.w}</td>
                        <td className="py-3 px-4 text-center font-bold text-red-600">{team.l}</td>
                        <td className={`py-3 px-4 text-center font-bold ${team.pd > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {team.pd > 0 ? '+' : ''}{team.pd}
                        </td>
                        <td className="py-3 px-4 text-center text-foreground">{team.ps}</td>
                        <td className="py-3 px-4 text-center text-foreground">{team.pa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            {/* Roster Tab */}
            <TabsContent value="roster">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary">Team Roster</h2>
                <p className="text-sm text-muted-foreground">Update roster information below</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {roster.map((player, idx) => (
                  <Card key={idx} className="p-6 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">#{player.number}</span>
                    </div>
                    <p className="font-semibold text-foreground mb-1">{player.name}</p>
                    <p className="text-sm text-accent font-semibold">{player.position}</p>
                  </Card>
                ))}
              </div>
              <Card className="mt-8 p-6 bg-secondary/50 border-dashed border-2 border-primary">
                <p className="text-center text-muted-foreground mb-4">Ready to add your team roster?</p>
                <Button className="w-full bg-primary hover:bg-primary/90">Add Player Information</Button>
              </Card>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary">Game Videos</h2>
                <p className="text-sm text-muted-foreground">Weekly game highlights</p>
              </div>
              {videos.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {videos.map((video, idx) => (
                    <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                      <div className="relative overflow-hidden bg-black aspect-video">
                        <img src={video.thumbnail} alt={video.opponent} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                          <Play className="w-16 h-16 text-white fill-white" />
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground mb-1">{video.date}</p>
                        <p className="font-semibold text-foreground">vs {video.opponent}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-8 text-center bg-secondary/30">
                  <Play className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">No videos uploaded yet</p>
                  <Button className="bg-primary hover:bg-primary/90">Upload Game Video</Button>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 border-t border-primary/20">
        <div className="container text-center">
          <p className="text-sm text-blue-100 mb-2">Noa Porter Basketball Team Tracker</p>
          <p className="text-xs text-blue-200">Carmel Valley 2025/26 Winter Basketball League • 4th Grade Boys</p>
        </div>
      </footer>
    </div>
  );
}
