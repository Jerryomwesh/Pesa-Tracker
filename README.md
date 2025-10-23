# 💰 Pesa-Tracker - Personal Finance Tracker

A modern React Native mobile application for tracking expenses and managing personal finances through SMS transaction analysis.

## 📱 Features

### 🔐 Authentication
- **Welcome Screen** - Beautiful landing page with M-Pesa inspired design
- **User Registration** - Clean signup with validation
- **User Login** - Secure authentication with confirmation dialogs

### 🏠 Dashboard
- **Financial Overview** - Monthly spending summary and transaction counts
- **Recent Transactions** - Quick view of latest financial activities
- **Quick Actions** - Easy navigation to detailed views

### 📊 Analytics
- **Spending Analysis** - Visual pie charts showing expense breakdown by category
- **Transaction Insights** - Data-driven financial insights

### 💳 Transactions
- **SMS Integration** - Reads SMS messages for transaction data (Android)
- **Transaction History** - Complete list of financial activities
- **Permission Management** - Secure SMS access with user consent

### 👤 Profile Management
- **User Profile** - Personal information display and editing
- **Photo Upload** - Profile picture with gallery integration
- **Settings** - App preferences and configurations
- **Support** - Help and contact information

## 🛠️ Tech Stack

### Frontend
- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **React Navigation** - Navigation and routing
- **Linear Gradient** - Beautiful gradient backgrounds
- **Expo Image Picker** - Photo selection functionality

### Styling
- **StyleSheet** - React Native styling approach
- **SafeAreaView** - Device-safe UI rendering
- **Custom Components** - Reusable UI elements

### Charts & Visualization
- **React Native Chart Kit** - Data visualization
- **SVG Support** - Scalable graphics for charts

## 📁 Project Structure

```
Pesa-Tracker/
├── assets/
│   └── images/           # App images and icons
├── src/
│   ├── screens/          # Authentication screens
│   │   ├── HomeScreen.js
│   │   ├── LoginScreen.js
│   │   └── SignUpScreen.js
│   ├── tabs/             # Main app tab screens
│   │   ├── DashboardScreen.js
│   │   ├── ProfileScreen.js
│   │   ├── AnalysisScreen.js
│   │   └── TransactionsScreen.js
│   └── styles/           # Global styling
├── App.js               # Navigation configuration
└── package.json         # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development - macOS only)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Pesa-Tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on device/simulator**
   - **Android**: Press `a` or scan QR code with Expo Go
   - **iOS**: Press `i` or scan QR code with Expo Go
   - **Web**: Press `w` to open in browser

## 📱 Platform Support

- ✅ **Android** - Full functionality including SMS reading
- ✅ **iOS** - Full functionality (SMS reading limited by iOS restrictions)
- ✅ **Web** - Basic functionality for testing

## 🎨 Design Features

### Color Scheme
- **Primary Green**: #10b981 (M-Pesa inspired)
- **Gradient**: #00b894 → #10b981 → #059669
- **Clean UI**: White cards with subtle shadows

### User Experience
- **Bottom Tab Navigation** - Easy access to main features
- **SafeArea Support** - Proper spacing on all devices
- **Responsive Design** - Works on various screen sizes
- **Smooth Animations** - Button press effects and transitions

## 🔧 Configuration

### SMS Permissions (Android)
The app requests SMS reading permissions to analyze transaction messages. This is optional and the app works without it.

### Image Permissions
Profile photo functionality requires gallery access permissions.

## 🚧 Development Status

### ✅ Completed Features
- Complete UI/UX design
- Navigation system
- Authentication screens
- Dashboard with stats
- Profile management
- Basic analytics
- SMS integration setup

### 🔄 Future Enhancements
- Backend API integration
- Real transaction data processing
- Advanced analytics
- Expense categorization
- Budget planning
- Data export features

## 👥 Team

Developed by a team of 4 developers as part of Phase 5 project at Moringa School.

## 📄 License

This project is for educational purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions:
- Email: help@pesa-tracker.com
- Phone: +254 700 123 456

---

**Pesa-Tracker** - Smart expense tracking through SMS analysis 💚