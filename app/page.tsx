import { SmartDropdown } from "@/components/smart-dropdown"

const countries = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "mx", label: "Mexico" },
  { value: "br", label: "Brazil" },
  { value: "ar", label: "Argentina" },
  { value: "uk", label: "United Kingdom" },
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
  { value: "it", label: "Italy" },
  { value: "es", label: "Spain" },
  { value: "jp", label: "Japan" },
  { value: "cn", label: "China" },
  { value: "in", label: "India" },
  { value: "au", label: "Australia" },
  { value: "nz", label: "New Zealand" },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Smart Dropdown Demo</h1>
          <p className="text-muted-foreground">Type to filter options in the dropdown below</p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="country" className="block text-sm font-medium mb-1">
              Select a country
            </label>
            <SmartDropdown options={countries} placeholder="Select a country..." emptyMessage="No country found." />
          </div>

          <div className="text-sm text-muted-foreground mt-8">
            <p>Try typing to filter the options in the dropdown.</p>
            <p>For example, type "united" to filter to countries with "United" in the name.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
