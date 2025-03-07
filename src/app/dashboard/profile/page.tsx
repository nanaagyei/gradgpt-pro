"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal");
  const progress = 30; // Would be calculated based on filled fields
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Complete Your Profile</h1>
        <p className="text-gray-600 mt-1">Help us understand your background to provide better recommendations</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Profile Completion</CardTitle>
          <CardDescription>Fill out all sections to get personalized program recommendations</CardDescription>
          <div className="mt-2">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="interests">Interests</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="country" className="text-sm font-medium">Country</label>
                  <Select>
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      {/* Add more countries */}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="academic" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="degree" className="text-sm font-medium">Highest Degree</label>
                  <Select>
                    <SelectTrigger id="degree">
                      <SelectValue placeholder="Select degree" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="associates">Associate&apos;s Degree</SelectItem>
                      <SelectItem value="bachelors">Bachelor&apos;s Degree</SelectItem>
                      <SelectItem value="masters">Master&apos;s Degree</SelectItem>
                      <SelectItem value="phd">Ph.D.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="major" className="text-sm font-medium">Major/Field of Study</label>
                  <Input id="major" placeholder="e.g., Computer Science" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="university" className="text-sm font-medium">University/Institution</label>
                  <Input id="university" placeholder="Enter university name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="gpa" className="text-sm font-medium">GPA</label>
                  <Input id="gpa" placeholder="e.g., 3.8" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="testScores" className="text-sm font-medium">Test Scores (GRE, GMAT, etc.)</label>
                <Textarea id="testScores" placeholder="Enter your test scores (e.g., GRE: V160, Q165, AWA4.0)" />
              </div>
            </TabsContent>
            
            <TabsContent value="interests" className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="field" className="text-sm font-medium">Field of Interest</label>
                <Select>
                  <SelectTrigger id="field">
                    <SelectValue placeholder="Select field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="medicine">Medicine</SelectItem>
                    <SelectItem value="law">Law</SelectItem>
                    <SelectItem value="arts">Arts & Humanities</SelectItem>
                    <SelectItem value="science">Natural Sciences</SelectItem>
                    <SelectItem value="social">Social Sciences</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="specialization" className="text-sm font-medium">Specialization</label>
                <Input id="specialization" placeholder="e.g., Machine Learning, Corporate Finance" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="researchInterests" className="text-sm font-medium">Research Interests</label>
                <Textarea 
                  id="researchInterests" 
                  placeholder="Describe your specific research interests or areas you want to explore"
                  rows={4}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="goals" className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="degreeGoal" className="text-sm font-medium">Desired Degree</label>
                <Select>
                  <SelectTrigger id="degreeGoal">
                    <SelectValue placeholder="Select degree" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="masters">Master&apos;s Degree</SelectItem>
                    <SelectItem value="phd">Ph.D.</SelectItem>
                    <SelectItem value="mba">MBA</SelectItem>
                    <SelectItem value="jd">J.D. (Law)</SelectItem>
                    <SelectItem value="md">M.D. (Medicine)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="careerGoals" className="text-sm font-medium">Career Goals</label>
                <Textarea 
                  id="careerGoals" 
                  placeholder="Describe your short and long-term career goals"
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Geographic Preferences</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="country" className="text-xs text-gray-600">Country</label>
                    <Select>
                      <SelectTrigger id="countryPref">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="eu">Europe</SelectItem>
                        <SelectItem value="as">Asia</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="region" className="text-xs text-gray-600">Region/State</label>
                    <Input id="region" placeholder="e.g., California, Northeast" />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={() => {
              const tabs = ["personal", "academic", "interests", "goals"];
              const currentIndex = tabs.indexOf(activeTab);
              if (currentIndex > 0) {
                setActiveTab(tabs[currentIndex - 1]);
              }
            }}
            disabled={activeTab === "personal"}
          >
            Previous
          </Button>
          <Button
            onClick={() => {
              const tabs = ["personal", "academic", "interests", "goals"];
              const currentIndex = tabs.indexOf(activeTab);
              if (currentIndex < tabs.length - 1) {
                setActiveTab(tabs[currentIndex + 1]);
              } else {
                // Save the profile information
                console.log("Save profile");
              }
            }}
          >
            {activeTab === "goals" ? "Save Profile" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}