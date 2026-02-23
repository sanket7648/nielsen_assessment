import { ArrowLeft, Hand, Zap, Eye, Target, Shield, Layout } from 'lucide-react';

interface DesignRationaleProps {
  onBack: () => void;
}

export default function DesignRationale({ onBack }: DesignRationaleProps) {
  return (
    <div className="h-full overflow-y-auto bg-gray-50">
      <div className="sticky top-0 bg-gray-900 text-white p-6 shadow-lg z-10">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-2xl font-bold hover:text-yellow-400 transition-colors mb-4"
        >
          <ArrowLeft size={28} />
          Back to App
        </button>
        <h1 className="text-4xl font-bold">Design Rationale</h1>
        <p className="text-xl text-gray-300 mt-2">The Conductor's Digital Companion</p>
      </div>

      <div className="max-w-4xl mx-auto p-6 pb-32 space-y-8">
        <section className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-yellow-100 p-3 rounded-xl">
              <Target size={32} className="text-yellow-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Design Challenge</h2>
              <p className="text-lg text-gray-600 mt-2">
                Replace heavy thermal printer machines with a mobile solution that works in extreme conditions
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="font-bold text-red-900">Constraint: One-handed use in jerky bus</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="font-bold text-blue-900">Constraint: Issue ticket for 3 passengers in under 4 seconds</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p className="font-bold text-green-900">Constraint: Glanceable in high-glare sunlight</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Hand size={32} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">1. One-Handed Reachability</h2>
              <p className="text-lg text-gray-600 mt-2">Bottom-heavy UI for thumb-zone optimization</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Key Decisions:</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Primary actions at bottom:</strong> Issue ticket button, passenger selectors, and destination choices positioned in lower 60% of screen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Large touch targets:</strong> Minimum 80px height for all interactive elements (3x standard), allowing accurate taps while moving</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Thumb-friendly grid:</strong> 3-column layout for number selection, easily reachable with thumb sweep</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Generous spacing:</strong> 16px gaps between buttons prevent mis-taps in jerky conditions</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Why It Matters:</h3>
              <p className="text-lg text-gray-700">
                Conductors hold cash/coins in one hand while operating the device. The thumb-zone (bottom third of screen) is the only reliably reachable area. Traditional top-heavy navigation would be unusable.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-xl">
              <Zap size={32} className="text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">2. Speed Optimization</h2>
              <p className="text-lg text-gray-600 mt-2">3-tap flow for most common scenarios</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The 4-Second Flow:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="bg-green-600 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center shrink-0">1</div>
                  <div>
                    <p className="font-bold text-gray-900">Tap Favorite Destination</p>
                    <p className="text-gray-600">~0.8 seconds (4 favorites always visible)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-green-600 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center shrink-0">2</div>
                  <div>
                    <p className="font-bold text-gray-900">Tap Passenger Count</p>
                    <p className="text-gray-600">~1.2 seconds (quick buttons 1-6 + counter)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-green-600 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center shrink-0">3</div>
                  <div>
                    <p className="font-bold text-gray-900">Tap Issue Ticket</p>
                    <p className="text-gray-600">~1.0 seconds</p>
                  </div>
                </div>
                <div className="border-t-2 border-green-300 pt-3 mt-3">
                  <p className="text-2xl font-bold text-green-700">Total: ~3 seconds ✓</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent Defaults:</h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">→</span>
                  <span><strong>Favorites system:</strong> Most-used destinations always on top</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">→</span>
                  <span><strong>No confirmation dialogs:</strong> Every action is direct and reversible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">→</span>
                  <span><strong>Instant fare calculation:</strong> No mental math required</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-yellow-100 p-3 rounded-xl">
              <Eye size={32} className="text-yellow-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">3. High-Glare Visibility</h2>
              <p className="text-lg text-gray-600 mt-2">Extreme contrast for outdoor readability</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Hierarchy:</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span><strong>4px bold borders:</strong> Black borders around all buttons create clear boundaries even in direct sunlight</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span><strong>Text sizing:</strong> 36-64px for primary info, 18-24px for secondary (2-3x standard web)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span><strong>Color system:</strong> Yellow/Blue/Green status colors with dark text (WCAG AAA contrast)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span><strong>No gradients on text:</strong> Solid backgrounds only for maximum legibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span><strong>Glanceable fare display:</strong> 48-72px bold numbers for instant recognition</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-yellow-400 p-4 rounded-xl border-4 border-gray-900">
                <p className="text-sm font-bold text-gray-900">DESTINATION</p>
                <p className="text-xs text-gray-700 mt-1">High energy, welcoming</p>
              </div>
              <div className="bg-blue-400 p-4 rounded-xl border-4 border-gray-900">
                <p className="text-sm font-bold text-gray-900">PASSENGERS</p>
                <p className="text-xs text-gray-700 mt-1">Calm, focused</p>
              </div>
              <div className="bg-green-400 p-4 rounded-xl border-4 border-gray-900">
                <p className="text-sm font-bold text-gray-900">CONFIRM</p>
                <p className="text-xs text-gray-700 mt-1">Success, action</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Layout size={32} className="text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">4. Information Architecture</h2>
              <p className="text-lg text-gray-600 mt-2">Progressive disclosure and signal prioritization</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hierarchy Decisions:</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">1.</span>
                  <span><strong>Fare is king:</strong> Largest element on every screen. Conductors must verify amounts instantly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">2.</span>
                  <span><strong>Destination second:</strong> Clear confirmation of where the ticket is valid.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">3.</span>
                  <span><strong>Passenger count visible:</strong> Always shows current selection to prevent errors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">4.</span>
                  <span><strong>Secondary info minimal:</strong> Codes, times shown but de-emphasized.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Navigation Strategy:</h3>
              <p className="text-lg text-gray-700 mb-3">
                Linear flow prevents confusion. Back actions are deliberate (not accidental). Each screen has one clear purpose and primary action.
              </p>
              <div className="flex items-center gap-2 text-lg font-bold text-gray-600">
                <span className="bg-yellow-200 px-4 py-2 rounded-lg">Destination</span>
                <span>→</span>
                <span className="bg-blue-200 px-4 py-2 rounded-lg">Passengers</span>
                <span>→</span>
                <span className="bg-green-200 px-4 py-2 rounded-lg">Confirm</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 p-3 rounded-xl">
              <Shield size={32} className="text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">5. Error Prevention</h2>
              <p className="text-lg text-gray-600 mt-2">Design that prevents mistakes before they happen</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Mechanisms:</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span><strong>Persistent context:</strong> Destination shown on passenger screen to prevent confusion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span><strong>Inline fare display:</strong> No surprises at checkout; price visible immediately</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span><strong>Visual feedback:</strong> Active states use scale, color, and border changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span><strong>No accidental actions:</strong> All destructive actions require deliberate large button presses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span><strong>Clear state indicators:</strong> Selected items are unmistakably highlighted</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Physical Context Considerations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Swaying Bus</h3>
              <ul className="space-y-2 text-gray-200">
                <li>→ Large touch targets (80px+)</li>
                <li>→ Generous spacing between elements</li>
                <li>→ Sticky bottom buttons (always reachable)</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Messy Hands</h3>
              <ul className="space-y-2 text-gray-200">
                <li>→ Imprecise taps accounted for</li>
                <li>→ No small UI elements</li>
                <li>→ Forgiving hit areas</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-green-400">Harsh Sunlight</h3>
              <ul className="space-y-2 text-gray-200">
                <li>→ Maximum contrast (black on white)</li>
                <li>→ Bold borders and shadows</li>
                <li>→ No subtle gradients or colors</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Time Pressure</h3>
              <ul className="space-y-2 text-gray-200">
                <li>→ Minimal cognitive load</li>
                <li>→ One clear action per screen</li>
                <li>→ No decision fatigue</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Design System Summary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Typography</h3>
              <ul className="space-y-1 text-white/90">
                <li>• Headlines: 36-64px</li>
                <li>• Body: 18-24px</li>
                <li>• Bold weights only</li>
                <li>• System fonts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Spacing</h3>
              <ul className="space-y-1 text-white/90">
                <li>• Base unit: 4px</li>
                <li>• Button height: 80px</li>
                <li>• Gaps: 12-16px</li>
                <li>• Padding: 24-32px</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Colors</h3>
              <ul className="space-y-1 text-white/90">
                <li>• Primary: Yellow</li>
                <li>• Action: Blue</li>
                <li>• Success: Green</li>
                <li>• Borders: Black</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-lg border-4 border-yellow-400">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Metrics</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
              <span className="text-xl font-bold text-gray-900">Target: Issue ticket in 4 seconds</span>
              <span className="text-3xl font-bold text-green-600">~3 sec ✓</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
              <span className="text-xl font-bold text-gray-900">One-handed operation</span>
              <span className="text-3xl font-bold text-blue-600">100% ✓</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl">
              <span className="text-xl font-bold text-gray-900">High-glare readable</span>
              <span className="text-3xl font-bold text-yellow-600">AAA ✓</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
