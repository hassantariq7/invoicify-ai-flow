
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { User, LogOut } from 'lucide-react'

const UserDashboard = () => {
  const { user, signOut } = useAuth()

  if (!user) return null

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Welcome back!</h3>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={signOut}
          className="flex items-center space-x-2"
        >
          <LogOut className="h-4 w-4" />
          <span>Sign Out</span>
        </Button>
      </div>
      
      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-primary mb-2">Beta Access Status</h4>
        <p className="text-sm text-gray-600">
          Thank you for being part of our beta program! You'll receive updates about new features and early access to InvoiceFlow.
        </p>
      </div>
    </div>
  )
}

export default UserDashboard
